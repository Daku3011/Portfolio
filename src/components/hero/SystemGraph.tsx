"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useRouter } from "next/navigation";

interface GraphNodeData {
  id: string;
  name: string;
  type: "project" | "core" | "domain";
  slug?: string;
  x: number;
  y: number;
  z: number;
  color: number;
  size: number;
  meta: string;
}

export function SystemGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [hoveredNode, setHoveredNode] = useState<GraphNodeData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile / touch-first screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || !window.matchMedia("(hover: hover)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 550;
    const height = container.clientHeight || 420;

    // Three.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 75;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Refined nodes: small, elegant
    const nodes: GraphNodeData[] = [
      { id: "core", name: "DWARKESH", type: "core", x: 0, y: 0, z: 0, color: 0x2ee59d, size: 1.6, meta: "BUILD SYSTEM // DAKU3011" },
      { id: "d_ai", name: "AI & MULTIMODAL", type: "domain", x: -20, y: 14, z: 3, color: 0x6b7280, size: 1.1, meta: "Gemini 2.5 · RAG · Vision" },
      { id: "d_sys", name: "DISTRIBUTED SYSTEMS", type: "domain", x: 22, y: 12, z: -3, color: 0x6b7280, size: 1.1, meta: "FastAPI · Redis · Docker" },
      { id: "d_fs", name: "FULL-STACK ENG", type: "domain", x: -18, y: -14, z: -4, color: 0x6b7280, size: 1.1, meta: "Next.js · TypeScript" },
      { id: "d_edge", name: "MOBILE & EDGE", type: "domain", x: 20, y: -14, z: 4, color: 0x6b7280, size: 1.1, meta: "React Native · MediaPipe" },

      // Projects
      { id: "p_minicode", name: "MINICODE", type: "project", slug: "minicode", x: -32, y: -2, z: 2, color: 0x2ee59d, size: 1.3, meta: "Competitive arena for real engineers" },
      { id: "p_judge", name: "AI HACK JUDGE", type: "project", slug: "ai-hackathon-judge", x: -12, y: 24, z: 6, color: 0x2ee59d, size: 1.3, meta: "Multi-persona autonomous judge" },
      { id: "p_gitremote", name: "GITREMOTE", type: "project", slug: "gitremote", x: 32, y: -3, z: 2, color: 0x2ee59d, size: 1.3, meta: "Remote Git operations on mobile" },
      { id: "p_cis", name: "CLASS INTEL", type: "project", slug: "class-intelligence", x: 6, y: 20, z: -5, color: 0x2ee59d, size: 1.2, meta: "Department RAG with ChromaDB" },
      { id: "p_orch", name: "ORCHESTRATE", type: "project", slug: "hackerrank-orchestrate", x: 10, y: -22, z: -2, color: 0x2ee59d, size: 1.2, meta: "Visual evidence verification" },
    ];

    const edges: [string, string][] = [
      ["core", "d_ai"],
      ["core", "d_sys"],
      ["core", "d_fs"],
      ["core", "d_edge"],
      ["d_ai", "p_judge"],
      ["d_ai", "p_cis"],
      ["d_sys", "p_minicode"],
      ["d_sys", "p_gitremote"],
      ["d_fs", "p_minicode"],
      ["d_edge", "p_gitremote"],
      ["d_ai", "p_orch"],
      ["d_edge", "p_orch"],
    ];

    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    const nodeMeshes: THREE.Mesh[] = [];
    const sphereGeo = new THREE.SphereGeometry(1, 14, 14);

    nodes.forEach((node) => {
      const mat = new THREE.MeshBasicMaterial({
        color: node.color,
        wireframe: node.type !== "core",
      });
      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.position.set(node.x, node.y, node.z);
      mesh.scale.setScalar(node.size);
      mesh.userData = node;
      graphGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Thin lines (opacity: 0.25)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x374151,
      transparent: true,
      opacity: 0.25,
    });

    edges.forEach(([fromId, toId]) => {
      const fromNode = nodes.find((n) => n.id === fromId);
      const toNode = nodes.find((n) => n.id === toId);
      if (fromNode && toNode) {
        const points = [
          new THREE.Vector3(fromNode.x, fromNode.y, fromNode.z),
          new THREE.Vector3(toNode.x, toNode.y, toNode.z),
        ];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeo, lineMat);
        graphGroup.add(line);
      }
    });

    // Subtle mouse pull (10-15% displacement only)
    const targetRotation = { x: 0, y: 0 };
    const mouse = new THREE.Vector2(999, 999);
    const raycaster = new THREE.Raycaster();

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouse.x = (clientX / width) * 2 - 1;
      mouse.y = -(clientY / height) * 2 + 1;

      targetRotation.y = (clientX / width - 0.5) * 0.15; // 15% max pull
      targetRotation.x = (clientY / height - 0.5) * 0.12;
    };

    const onClick = () => {
      if (hoveredNode && hoveredNode.slug) {
        router.push(`/work/${hoveredNode.slug}`);
      }
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("click", onClick);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth dampening
      graphGroup.rotation.y += (targetRotation.y - graphGroup.rotation.y) * 0.05;
      graphGroup.rotation.x += (targetRotation.x - graphGroup.rotation.x) * 0.05;

      // Raycasting
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const hit = intersects[0].object.userData as GraphNodeData;
        setHoveredNode(hit);
        container.style.cursor = hit.slug ? "pointer" : "default";
      } else {
        setHoveredNode(null);
        container.style.cursor = "default";
      }

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("click", onClick);
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isMobile, router, hoveredNode]);

  return (
    <div
      className="relative w-full h-[380px] sm:h-[460px] border border-border/80 bg-surface/30 backdrop-blur-sm overflow-hidden flex items-center justify-center select-none"
      data-project="graph"
    >
      {/* HUD Header */}
      <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
        <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
          SYS.GRAPH // TOPOLOGY
        </span>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none hidden sm:block">
        <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
          TARGET // 60FPS
        </span>
      </div>

      {/* Mobile Static SVG Fallback (Layer 13) */}
      {isMobile ? (
        <div className="w-full h-full p-8 flex items-center justify-center">
          <svg
            viewBox="0 0 320 240"
            className="w-full h-full max-h-[300px]"
            aria-label="System topology network diagram"
          >
            {/* Connecting lines */}
            <line x1="160" y1="120" x2="80" y2="60" stroke="#374151" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="160" y1="120" x2="240" y2="60" stroke="#374151" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="160" y1="120" x2="70" y2="180" stroke="#374151" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="160" y1="120" x2="250" y2="180" stroke="#374151" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="80" y1="60" x2="40" y2="40" stroke="#2ee59d" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="240" y1="60" x2="280" y2="40" stroke="#2ee59d" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="70" y1="180" x2="30" y2="200" stroke="#2ee59d" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="250" y1="180" x2="290" y2="200" stroke="#2ee59d" strokeWidth="1" strokeOpacity="0.4" />

            {/* Core Node */}
            <circle cx="160" cy="120" r="10" fill="#101216" stroke="#2ee59d" strokeWidth="2" />
            <circle cx="160" cy="120" r="4" fill="#2ee59d" />
            <text x="160" y="142" textAnchor="middle" fill="#f3f4f6" fontSize="9" fontFamily="monospace" fontWeight="bold">DWARKESH</text>

            {/* Domain Nodes */}
            <circle cx="80" cy="60" r="5" fill="#101216" stroke="#6b7280" strokeWidth="1" />
            <circle cx="240" cy="60" r="5" fill="#101216" stroke="#6b7280" strokeWidth="1" />
            <circle cx="70" cy="180" r="5" fill="#101216" stroke="#6b7280" strokeWidth="1" />
            <circle cx="250" cy="180" r="5" fill="#101216" stroke="#6b7280" strokeWidth="1" />

            {/* Project Nodes */}
            <g onClick={() => router.push("/work/ai-hackathon-judge")} className="cursor-pointer">
              <circle cx="40" cy="40" r="6" fill="#2ee59d" />
              <text x="40" y="28" textAnchor="middle" fill="#2ee59d" fontSize="8" fontFamily="monospace">AI JUDGE</text>
            </g>
            <g onClick={() => router.push("/work/minicode")} className="cursor-pointer">
              <circle cx="280" cy="40" r="6" fill="#2ee59d" />
              <text x="280" y="28" textAnchor="middle" fill="#2ee59d" fontSize="8" fontFamily="monospace">MINICODE</text>
            </g>
            <g onClick={() => router.push("/work/gitremote")} className="cursor-pointer">
              <circle cx="30" cy="200" r="6" fill="#2ee59d" />
              <text x="30" y="218" textAnchor="middle" fill="#2ee59d" fontSize="8" fontFamily="monospace">GITREMOTE</text>
            </g>
            <g onClick={() => router.push("/work/hackerrank-orchestrate")} className="cursor-pointer">
              <circle cx="290" cy="200" r="6" fill="#2ee59d" />
              <text x="290" y="218" textAnchor="middle" fill="#2ee59d" fontSize="8" fontFamily="monospace">ORCHESTRATE</text>
            </g>
          </svg>
        </div>
      ) : (
        /* Desktop Three.js WebGL Container */
        <div ref={containerRef} className="w-full h-full" />
      )}

      {/* Hover metadata card */}
      {!isMobile && (
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto pointer-events-none">
          {hoveredNode ? (
            <div className="border border-accent/40 bg-background/95 backdrop-blur-md px-3.5 py-2 max-w-sm pointer-events-auto">
              <div className="flex items-center justify-between gap-4 font-mono">
                <span className="text-xs font-bold text-accent">
                  {hoveredNode.name}
                </span>
                <span className="text-[9px] uppercase text-muted">
                  [{hoveredNode.type}]
                </span>
              </div>
              <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
                {hoveredNode.meta}
              </p>
              {hoveredNode.slug && (
                <p className="font-mono text-[10px] text-accent mt-1.5 font-semibold">
                  Click to view case study →
                </p>
              )}
            </div>
          ) : (
            <div className="border border-border/60 bg-surface/60 px-3 py-1 inline-block">
              <span className="font-mono text-[10px] text-muted">
                Hover node to inspect topology
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
