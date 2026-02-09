import fs from "node:fs/promises";
import path from "node:path";

export default async function GetStartedPage() {
  const root = process.cwd();
  const readmePath = path.join(root, "README.md");
  const content = await fs.readFile(readmePath, "utf8");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Get Started</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This page renders <span className="font-mono">README.md</span> from the repo.
        </p>
      </div>

      <div className="rounded-lg border bg-background p-4">
        <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6">
          {content}
        </pre>
      </div>
    </div>
  );
}
