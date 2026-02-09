import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

const ALLOWED_PREFIXES = [
  "docs/specs/",
  "docs/decisions/",
  "design/",
] as const;

function isAllowed(relPath: string) {
  return ALLOWED_PREFIXES.some((p) => relPath.startsWith(p)) && relPath.endsWith(".md");
}

async function readRepoFile(relPath: string) {
  const root = process.cwd();
  const fullPath = path.join(root, relPath);
  return await fs.readFile(fullPath, "utf8");
}

export default async function DocFilePage({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const { path: parts } = await params;
  const relPath = parts.join("/");

  if (!isAllowed(relPath)) notFound();

  const content = await readRepoFile(relPath).catch(() => null);
  if (!content) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{relPath}</h1>
          <p className="mt-1 text-sm text-muted-foreground">Rendered markdown (raw).</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/docs">Docs</Link>
          </Button>
        </div>
      </div>

      <div className="rounded-lg border bg-background p-4">
        <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6">
          {content}
        </pre>
      </div>
    </div>
  );
}
