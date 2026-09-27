"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from "lucide-react";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export function EasterEggs() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "init",
      response: (
        <div className="space-y-1 text-slate-300">
          <p className="text-accent font-bold">
            DWARKESH KERNEL BUILD SYSTEM v2.0 [x86_64]
          </p>
          <p className="text-muted-foreground text-xs">
            Type <span className="text-accent font-mono font-bold">help</span> to view available system diagnostics.
          </p>
        </div>
      ),
    },
  ]);
  const konamiIndex = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // DevTools ASCII Banner Easter Egg
  useEffect(() => {
    console.log(
      `%c
   ___       _   _     ___           _               
  / _ \\__ _ | |_| |__ / _ \\_   _ ___| |_ ___ _ __ ___ 
 / /_)/ _\` || __| '_ / /_)/ | | / __| __/ _ \\ '_ \` _ \\
/ ___/ (_| || |_| | | ___/| |_| \\__ \\ ||  __/ | | | | |
\\/    \\__,_| \\__|_| \\/     \\__,_|___/\\__\\___|_| |_| |_|

>> DWARKESH RAMANI // BUILD SYSTEM
>> Location: Surat, India
>> GitHub: https://github.com/Daku3011
>> Try typing the Konami Code (↑ ↑ ↓ ↓ ← → ← → B A) or pressing '~' on the keyboard!
`,
      "color: #2ee59d; font-family: monospace; font-size: 11px; font-weight: bold;"
    );
  }, []);

  // Listen for Konami Code and '~' hotkey
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal with tilde / backtick if not typing in input
      if (e.key === "`" || e.key === "~") {
        const target = e.target as HTMLElement;
        if (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA") {
          e.preventDefault();
          setIsOpen((prev) => !prev);
          return;
        }
      }

      // Konami sequence tracking
      if (e.key.toLowerCase() === KONAMI_CODE[konamiIndex.current].toLowerCase()) {
        konamiIndex.current++;
        if (konamiIndex.current === KONAMI_CODE.length) {
          setIsOpen(true);
          konamiIndex.current = 0;
          setHistory((prev) => [
            ...prev,
            {
              command: "konami-code",
              response: (
                <div className="p-2 border border-accent bg-accent/10 text-accent font-bold text-xs">
                  🏆 KONAMI CODE UNLOCKED: 30 LIVES GRANTED! WELCOME TO ROOT PRIVILEGES.
                </div>
              ),
            },
          ]);
        }
      } else {
        konamiIndex.current = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let res: React.ReactNode = null;

    switch (cmd) {
      case "help":
        res = (
          <div className="space-y-1 text-xs">
            <p className="text-accent font-semibold">AVAILABLE COMMANDS:</p>
            <p><span className="text-slate-200 font-bold">whoami</span> — Display operator identity</p>
            <p><span className="text-slate-200 font-bold">uname -a</span> — Print system architecture</p>
            <p><span className="text-slate-200 font-bold">projects</span> — List verified production repositories</p>
            <p><span className="text-slate-200 font-bold">skills</span> — Hardware & software engineering toolchain</p>
            <p><span className="text-slate-200 font-bold">contact</span> — Verified email and endpoints</p>
            <p><span className="text-slate-200 font-bold">sudo rm -rf /</span> — Wipe server</p>
            <p><span className="text-slate-200 font-bold">clear</span> — Clear terminal output</p>
            <p><span className="text-slate-200 font-bold">exit</span> — Close terminal HUD</p>
          </div>
        );
        break;

      case "whoami":
        res = (
          <p className="text-xs text-slate-300">
            {profile.name} ({profile.handle}) — {profile.role} based in {profile.location}.
          </p>
        );
        break;

      case "uname -a":
        res = (
          <p className="text-xs text-slate-300">
            Linux dwarkesh-os 6.8.0-generic #42-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux
          </p>
        );
        break;

      case "projects":
        res = (
          <div className="space-y-1 text-xs">
            {projects.map((p) => (
              <p key={p.slug}>
                <span className="text-accent font-bold">[{p.number}] {p.title}</span> — {p.tagline}
              </p>
            ))}
          </div>
        );
        break;

      case "skills":
        res = (
          <p className="text-xs text-slate-300">
            TypeScript, Next.js 15, React 19, Python, FastAPI, Docker, PostgreSQL, Redis, ChromaDB, Gemini 2.5, OpenCV, MediaPipe, React Native, Linux.
          </p>
        );
        break;

      case "contact":
        res = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>EMAIL: {profile.socials.email}</p>
            <p>GITHUB: {profile.socials.github}</p>
            <p>LINKEDIN: {profile.socials.linkedin}</p>
          </div>
        );
        break;

      case "sudo rm -rf /":
      case "rm -rf /":
        res = (
          <div className="text-rose-400 font-mono text-xs">
            ⚠️ Permission denied: dwarkesh is not in the sudoers file. This incident will be reported to Santa Claus.
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        setIsOpen(false);
        setInputVal("");
        return;

      default:
        res = (
          <p className="text-xs text-rose-400">
            bash: {cmd}: command not found. Type &apos;help&apos; for assistance.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, response: res }]);
    setInputVal("");
  };

  return (
    <>
      {/* Subtle Floating Terminal Trigger Badge in bottom corner */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 px-3 py-1.5 border border-border/80 bg-surface/90 backdrop-blur-md font-mono text-[10px] text-muted-foreground hover:text-accent hover:border-accent transition-all flex items-center gap-2 group shadow-lg"
        title="Toggle Engineering Terminal (~ or Konami Code)"
        aria-label="Open engineering terminal"
      >
        <TerminalIcon className="w-3.5 h-3.5 text-accent group-hover:animate-pulse" />
        <span className="hidden sm:inline">TERMINAL [~]</span>
      </button>

      {/* Terminal Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[10001] bg-background/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in zoom-in-95 duration-150"
          role="dialog"
          aria-modal="true"
          aria-label="Engineering Terminal HUD"
        >
          <div className="w-full max-w-2xl h-[480px] bg-surface border border-accent/60 shadow-2xl flex flex-col font-mono text-xs overflow-hidden">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface-muted border-b border-border/80 select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent/80" />
                <span className="ml-2 font-bold text-foreground text-[11px] tracking-wider">
                  dwarkesh@build-system:~
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-foreground transition-colors p-1"
                aria-label="Close terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono select-text bg-background/95">
              {history.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2 text-muted">
                    <span className="text-accent font-bold">$</span>
                    <span className="text-foreground">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.response}</div>
                </div>
              ))}
              <div ref={terminalBottomRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleCommand}
              className="flex items-center gap-2 px-4 py-3 bg-surface-muted border-t border-border/80"
            >
              <span className="text-accent font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'whoami', 'projects'..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted focus:outline-none font-mono text-xs"
                autoComplete="off"
                spellCheck={false}
              />
              <button type="submit" className="text-muted hover:text-accent p-1">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
