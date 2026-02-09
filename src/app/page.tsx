import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-4">Framework for AI-Assisted Development</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ship faster with
            <br />
            <span className="text-primary">Vibe Coding</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A Next.js starter template optimized for AI/Agentic development. 
            The documentation structure matters as much as the code.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="/get-started">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/adamdaigian/vibe-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">What&apos;s Included</h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to build with AI assistance
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📄 MASTERPLAN.md
                </CardTitle>
                <CardDescription>
                  Vision, goals, and success criteria in one place
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Give AI assistants the context they need to make good decisions.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🤖 AGENTS.md
                </CardTitle>
                <CardDescription>
                  Instructions for AI assistants working on your codebase
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Code patterns, dos and don&apos;ts, and project structure explained.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📋 Feature Specs
                </CardTitle>
                <CardDescription>
                  Structured templates for feature requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                User stories, technical design, edge cases, and testing plans.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎨 Design System
                </CardTitle>
                <CardDescription>
                  shadcn/ui components with documented patterns
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Consistent UI built on Tailwind CSS and Radix primitives.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📊 Research Templates
                </CardTitle>
                <CardDescription>
                  Structure for competitive analysis and user research
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Document findings in a way AI assistants can reference.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📝 Decision Records
                </CardTitle>
                <CardDescription>
                  Track architectural decisions with ADRs
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Know why decisions were made, not just what was decided.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            <p className="mt-4 text-muted-foreground">
              Modern tools that work great with AI assistance
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            {[
              { name: "Next.js", version: "15" },
              { name: "React", version: "19" },
              { name: "TypeScript", version: "5" },
              { name: "Tailwind CSS", version: "4" },
              { name: "shadcn/ui", version: "latest" },
            ].map((tech) => (
              <div key={tech.name} className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2">
                <span className="font-medium">{tech.name}</span>
                <Badge variant="outline">{tech.version}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Ready to vibe?</h2>
          <p className="mt-4 text-muted-foreground">
            Clone the repo and start building with AI assistance
          </p>
          <div className="mt-8 overflow-hidden rounded-lg bg-zinc-900 p-4 text-left">
            <code className="text-sm text-green-400">
              git clone https://github.com/adamdaigian/vibe-starter.git my-app
cd my-app
npm install
npm run dev
            </code>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          Built for the AI-assisted development era ✨
        </div>
      </footer>
    </div>
  );
}
