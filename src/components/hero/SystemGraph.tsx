"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useRouter } from "next/navigation";
import { projects } from "@/content/projects";

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
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    // Detect touch
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    const container = containerRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 85;

    // WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      return; // Graceful exit if WebGL fails
    }

    // Node definitions
    const nodes: GraphNodeData[] = [
      { id: "core", name: "DWARKESH", type: "core", x: 0, y: 0, z: 0, color: 0x2ee59d, size: 2.4, meta: "ENGINEER / BUILD SYSTEM" },
      // Domains
      { id: "d_ai", name: "AI & MULTIMODAL", type: "domain", x: -22, y: 16, z: 5, color: 0x10b981, size: 1.6, meta: "Gemini · RAG · Agents" },
      { id: "d_sys", name: "DISTRIBUTED SYSTEMS", type: "domain", x: 24, y: 14, z: -4, color: 0x38bdf8, size: 1.6, meta: "FastAPI · Redis · Docker" },
      { id: "d_fs", name: "FULL-STACK ENG", type: "domain", x: -20, y: -16, z: -5, color: 0xa855f7, size: 1.6, meta: "Next.js · TypeScript · DB" },
      { id: "d_edge", name: "MOBILE & EDGE", type: "domain", x: 22, y: -16, z: 6, color: 0xf59e0b, size: 1.6, meta: "React Native · MediaPipe · LAN" },

      // Projects
      { id: "p_minicode", name: "MINICODE", type: "project", slug: "minicode", x: -36, y: -2, z: 2, color: 0x2ee59d, size: 2.0, meta: "Competitive Coding Arena (Next.js/FastAPI)" },
      { id: "p_judge", name: "AI HACK JUDGE", type: "project", slug: "ai-hackathon-judge", x: -14, y: 28, z: 8, color: 0x2ee59d, size: 2.0, meta: "Multi-Persona AI Evaluation Engine" },
      { id: "p_gitremote", name: "GITREMOTE", type: "project", slug: "gitremote", x: 36, y: -4, z: 3, color: 0x2ee59d, size: 2.0, meta: "Remote Mobile Git & LAN Sync" },
      { id: "p_cis", name: "CLASS INTEL (CIS)", type: "project", slug: "class-intelligence", x: 6, y: 24, z: -6, color: 0x2ee59d, size: 1.8, meta: "Department RAG with ChromaDB" },
      { id: "p_orch", name: "ORCHESTRATE", type: "project", slug: "hackerrank-orchestrate", x: 12, y: -26, z: -2, color: 0x2ee59d, size: 1.8, meta: "Visual Evidence Damage Verification" },
    ];

    // Edges
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

    // Mesh group
    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    // Create Node Meshes
    const nodeMeshes: THREE.Mesh[] = [];
    const sphereGeo = new THREE.SphereGeometry(1, 16, 16);

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

      // Core pulsating halo ring
      if (node.type === "core") {
        const ringGeo = new THREE.RingGeometry(3.2, 3.4, 32);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x2ee59d, side: THREE.DoubleSide, transparent: true, opacity: 0.3 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.set(0, 0, 0);
        graphGroup.add(ring);
      }
    });

    // Create Line Edges
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x222631,
      transparent: true,
      opacity: 0.8,
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

    // Mouse Interaction
    const mouse = new THREE.Vector2(999, 999);
    const targetRotation = { x: 0, y: 0 };
    const raycaster = new THREE.Raycaster();

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouse.x = (clientX / width) * 2 - 1;
      mouse.y = -(clientY / height) * 2 + 1;

      targetRotation.y = (clientX / width - 0.5) * 0.45;
      targetRotation.x = (clientY / height - 0.5) * 0.35;
    };

    const onClick = () => {
      if (hoveredNode && hoveredNode.slug) {
        router.push(`/work/${hoveredNode.slug}`);
      }
    };

    if (!isTouch) {
      container.addEventListener("mousemove", onMouseMove);
      container.addEventListener("click", onClick);
    }

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Subtle resting rotation
      graphGroup.rotation.y += (targetRotation.y - graphGroup.rotation.y) * 0.05;
      graphGroup.rotation.x += (targetRotation.x - graphGroup.rotation.x) * 0.05;

      // Small floating breathing physics on nodes
      nodeMeshes.forEach((mesh, index) => {
        mesh.position.y += Math.sin(elapsed * 1.5 + index) * 0.015;
      });

      // Raycasting for hover state
      if (!isTouch) {
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
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
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
      if (!isTouch) {
        container.removeEventListener("mousemove", onMouseMove);
        container.removeEventListener("click", onClick);
      }
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [router, hoveredNode, isTouchDevice]);

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] border border-border/80 bg-surface/40 backdrop-blur-sm overflow-hidden flex items-center justify-center">
      {/* Visual Canvas Container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Static HUD Header Overlay */}
      <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
          SYS.GRAPH // INTERACTIVE TOPOLOGY
        </span>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none hidden sm:block">
        <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
          ROTATION: REALTIME · 60FPS
        </span>
      </div>

      {/* Hover Node Meta readout */}
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto pointer-events-none">
        {hoveredNode ? (
          <div className="border border-accent/40 bg-background/95 backdrop-blur-md px-4 py-2.5 max-w-md pointer-events-auto transition-all">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs font-bold text-accent tracking-wider">
                {hoveredNode.name}
              </span>
              <span className="font-mono text-[10px] uppercase text-muted">
                [{hoveredNode.type}]
              </span>
            </div>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              {hoveredNode.meta}
            </p>
            {hoveredNode.slug && (
              <p className="font-mono text-[11px] text-accent mt-2 flex items-center gap-1 font-semibold">
                Click to explore case study →
              </p>
            )}
          </div>
        ) : (
          <div className="border border-border/60 bg-surface/80 backdrop-blur-sm px-3.5 py-1.5 inline-block">
            <span className="font-mono text-[11px] text-muted">
              {isTouchDevice ? "Touch node to inspect system" : "Hover node to inspect topology · Click to view case study"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
