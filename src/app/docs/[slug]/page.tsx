import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

const DOC_MAP: Record<string, { title: string; relPath: string }> = {
  "masterplan": { title: "MASTERPLAN.md", relPath: "MASTERPLAN.md" },
  "implementation-plan": {
    title: "IMPLEMENTATION-PLAN.md",
    relPath: "IMPLEMENTATION-PLAN.md",
  },
  "agents": { title: "AGENTS.md", relPath: "AGENTS.md" },
  "design-system": {
    title: "design/design-system.md",
    relPath: "design/design-system.md",
  },
  "brand-guidelines": {
    title: "design/brand-guidelines.md",
    relPath: "design/brand-guidelines.md",
  },
};

async function readRepoFile(relPath: string) {
  const root = process.cwd();
  const fullPath = path.join(root, relPath);
  return await fs.readFile(fullPath, "utf8");
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = DOC_MAP[slug];
  if (!entry) notFound();

  const content = await readRepoFile(entry.relPath).catch(() => null);
  if (!content) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{entry.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Rendered from <span className="font-mono">{entry.relPath}</span>
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/docs">Back to docs</Link>
        </Button>
      </div>

      <div className="rounded-lg border bg-background p-4">
        <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6">
          {content}
        </pre>
      </div>
    </div>
  );
}
