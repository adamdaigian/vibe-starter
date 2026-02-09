import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold hover:opacity-80">
              ✨ Vibe Starter
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/design-system" className="text-sm font-medium">
              Design System
            </Link>
            <Link href="/brand" className="text-sm text-muted-foreground hover:text-foreground">
              Brand
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Design System</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Component library built on shadcn/ui and Tailwind CSS
          </p>
        </div>

        <Tabs defaultValue="buttons" className="space-y-8">
          <TabsList>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
          </TabsList>

          {/* Buttons */}
          <TabsContent value="buttons" className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Button Variants</h2>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Button Sizes</h2>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">✨</Button>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Button States</h2>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </section>

            <section className="mt-8 rounded-lg bg-muted/50 p-6">
              <h3 className="mb-2 font-semibold">Usage</h3>
              <pre className="overflow-x-auto text-sm">
{`import { Button } from "@/components/ui/button"

<Button variant="default" size="default">
  Click me
</Button>`}
              </pre>
            </section>
          </TabsContent>

          {/* Cards */}
          <TabsContent value="cards" className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Card Examples</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Card</CardTitle>
                    <CardDescription>A simple card with header and content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This is the card content area. You can put any content here.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Card with Footer</CardTitle>
                    <CardDescription>Includes an action area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cards can have footers for actions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Action</Button>
                  </CardFooter>
                </Card>

                <Card className="cursor-pointer transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>Interactive Card</CardTitle>
                    <CardDescription>Hover to see the effect</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Add hover states for clickable cards.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mt-8 rounded-lg bg-muted/50 p-6">
              <h3 className="mb-2 font-semibold">Usage</h3>
              <pre className="overflow-x-auto text-sm">
{`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`}
              </pre>
            </section>
          </TabsContent>

          {/* Badges */}
          <TabsContent value="badges" className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Badge Variants</h2>
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Common Use Cases</h2>
              <div className="flex flex-wrap gap-4">
                <Badge>New</Badge>
                <Badge variant="secondary">Beta</Badge>
                <Badge variant="outline">v1.0.0</Badge>
                <Badge variant="destructive">Deprecated</Badge>
              </div>
            </section>

            <section className="mt-8 rounded-lg bg-muted/50 p-6">
              <h3 className="mb-2 font-semibold">Usage</h3>
              <pre className="overflow-x-auto text-sm">
{`import { Badge } from "@/components/ui/badge"

<Badge variant="default">Badge</Badge>`}
              </pre>
            </section>
          </TabsContent>

          {/* Typography */}
          <TabsContent value="typography" className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Headings</h2>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Heading 1 (text-4xl)</h1>
                <h2 className="text-3xl font-semibold">Heading 2 (text-3xl)</h2>
                <h3 className="text-2xl font-semibold">Heading 3 (text-2xl)</h3>
                <h4 className="text-xl font-semibold">Heading 4 (text-xl)</h4>
                <h5 className="text-lg font-semibold">Heading 5 (text-lg)</h5>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Body Text</h2>
              <div className="space-y-4">
                <p className="text-base">Body text (text-base) — Default paragraph text for main content.</p>
                <p className="text-sm text-muted-foreground">
                  Muted text (text-sm text-muted-foreground) — Secondary information and descriptions.
                </p>
                <p className="text-xs text-muted-foreground">
                  Caption text (text-xs) — Smallest text for labels and metadata.
                </p>
              </div>
            </section>
          </TabsContent>

          {/* Colors */}
          <TabsContent value="colors" className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Background Colors</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-background p-4">
                  <span className="text-sm font-medium">bg-background</span>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <span className="text-sm font-medium">bg-card</span>
                </div>
                <div className="rounded-lg border bg-muted p-4">
                  <span className="text-sm font-medium">bg-muted</span>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Text Colors</h2>
              <div className="space-y-2">
                <p className="text-foreground">text-foreground — Primary text</p>
                <p className="text-muted-foreground">text-muted-foreground — Secondary text</p>
                <p className="text-primary">text-primary — Brand/link color</p>
                <p className="text-destructive">text-destructive — Error/danger</p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Border Colors</h2>
              <div className="flex gap-4">
                <div className="rounded-lg border-2 border-border p-4">
                  <span className="text-sm font-medium">border-border</span>
                </div>
                <div className="rounded-lg border-2 border-primary p-4">
                  <span className="text-sm font-medium">border-primary</span>
                </div>
                <div className="rounded-lg border-2 border-destructive p-4">
                  <span className="text-sm font-medium">border-destructive</span>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
