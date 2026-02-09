import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DOCS = [
  {
    href: "/docs/masterplan",
    title: "MASTERPLAN",
    description: "Vision, goals, constraints, and success criteria.",
  },
  {
    href: "/docs/implementation-plan",
    title: "IMPLEMENTATION-PLAN",
    description: "Current sprint plan and execution notes.",
  },
  {
    href: "/docs/agents",
    title: "AGENTS",
    description: "How to work with AI agents in this repo.",
  },
  {
    href: "/docs/specs",
    title: "Specs",
    description: "Feature specs (markdown index).",
  },
  {
    href: "/docs/decisions",
    title: "Decisions",
    description: "Architecture Decision Records (markdown index).",
  },
  {
    href: "/docs/design-system",
    title: "Design System (markdown)",
    description: "Written conventions behind the UI system.",
  },
  {
    href: "/docs/brand-guidelines",
    title: "Brand Guidelines (markdown)",
    description: "Tone, palette, typography, and brand rules.",
  },
] as const;

export default function DocsIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Docs</h1>
        <p className="mt-2 text-muted-foreground">
          Rendered markdown views of the key repo docs.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {DOCS.map((d) => (
          <Link key={d.href} href={d.href} className="block">
            <Card className="h-full transition hover:bg-muted/40">
              <CardHeader>
                <CardTitle>{d.title}</CardTitle>
                <CardDescription>{d.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  View <span className="font-mono">{d.href}</span>
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
