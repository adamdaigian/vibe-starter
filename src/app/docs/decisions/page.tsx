import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

async function listMarkdown(relDir: string) {
  const root = process.cwd();
  const full = path.join(root, relDir);
  const entries = await fs.readdir(full, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name)
    .sort();
}

export default async function DecisionsIndexPage() {
  const files = await listMarkdown("docs/decisions");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Decisions</h1>
        <p className="mt-2 text-muted-foreground">
          Architecture Decision Records in <code>docs/decisions</code>.
        </p>
      </div>

      <div className="grid gap-3">
        {files.map((name) => (
          <Link key={name} href={`/docs/file/docs/decisions/${encodeURIComponent(name)}`}>
            <Card className="transition hover:bg-muted/40">
              <CardHeader>
                <CardTitle className="text-base font-semibold">{name}</CardTitle>
                <CardDescription>{`docs/decisions/${name}`}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
        {files.length === 0 ? (
          <p className="text-sm text-muted-foreground">No decision files found.</p>
        ) : null}
      </div>
    </div>
  );
}
