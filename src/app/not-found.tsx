import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 max-w-lg mx-auto">
      <div className="p-3 border border-accent/40 bg-accent/10 rounded-full mb-6">
        <Terminal className="w-8 h-8 text-accent" />
      </div>
      <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest mb-2">
        ERROR // 404
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-foreground uppercase mb-4">
        NODE NOT FOUND
      </h1>
      <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-8">
        The requested routing node or case study artifact does not exist in the current build system graph.
      </p>
      <Link
        href="/"
        className="px-6 py-3 border border-accent bg-accent text-background font-mono text-xs uppercase font-bold tracking-wider hover:bg-accent/90 transition-all flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>RETURN TO BASE</span>
      </Link>
    </div>
  );
}
