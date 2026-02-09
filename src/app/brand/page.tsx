import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function BrandPage() {
  const colors = {
    primary: [
      { name: "Background", value: "#FFFFFF", class: "bg-white", textClass: "text-black" },
      { name: "Foreground", value: "#0A0B0B", class: "bg-[#0A0B0B]", textClass: "text-white" },
      { name: "Primary", value: "#0A0B0B", class: "bg-[#0A0B0B]", textClass: "text-white" },
    ],
    neutral: [
      { name: "Muted", value: "#F4F4F5", class: "bg-[#F4F4F5]", textClass: "text-black" },
      { name: "Border", value: "#E4E4E7", class: "bg-[#E4E4E7]", textClass: "text-black" },
      { name: "Muted Text", value: "#71717A", class: "bg-[#71717A]", textClass: "text-white" },
    ],
    semantic: [
      { name: "Success", value: "#22C55E", class: "bg-[#22C55E]", textClass: "text-white" },
      { name: "Warning", value: "#F59E0B", class: "bg-[#F59E0B]", textClass: "text-black" },
      { name: "Error", value: "#EF4444", class: "bg-[#EF4444]", textClass: "text-white" },
      { name: "Info", value: "#3B82F6", class: "bg-[#3B82F6]", textClass: "text-white" },
    ],
  };

  const typography = [
    { name: "Display", size: "48px", weight: "700", sample: "The quick brown fox" },
    { name: "H1", size: "36px", weight: "700", sample: "The quick brown fox" },
    { name: "H2", size: "24px", weight: "600", sample: "The quick brown fox" },
    { name: "H3", size: "20px", weight: "600", sample: "The quick brown fox" },
    { name: "Body", size: "16px", weight: "400", sample: "The quick brown fox jumps over the lazy dog." },
    { name: "Small", size: "14px", weight: "400", sample: "The quick brown fox jumps over the lazy dog." },
  ];

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
            <Link href="/design-system" className="text-sm text-muted-foreground hover:text-foreground">
              Design System
            </Link>
            <Link href="/brand" className="text-sm font-medium">
              Brand
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Brand Guidelines</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Visual identity and brand standards
          </p>
        </div>

        {/* Logo Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Logo</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Light Background</CardTitle>
              </CardHeader>
              <CardContent className="flex h-40 items-center justify-center rounded-lg bg-white">
                <span className="text-4xl font-bold text-black">✨ Vibe Starter</span>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dark Background</CardTitle>
              </CardHeader>
              <CardContent className="flex h-40 items-center justify-center rounded-lg bg-zinc-900">
                <span className="text-4xl font-bold text-white">✨ Vibe Starter</span>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Colors</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-medium">Primary</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {colors.primary.map((color) => (
                  <div key={color.name} className="overflow-hidden rounded-lg border">
                    <div className={`h-24 ${color.class}`} />
                    <div className="p-3">
                      <p className="font-medium">{color.name}</p>
                      <p className="text-sm text-muted-foreground">{color.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Neutral</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {colors.neutral.map((color) => (
                  <div key={color.name} className="overflow-hidden rounded-lg border">
                    <div className={`h-24 ${color.class}`} />
                    <div className="p-3">
                      <p className="font-medium">{color.name}</p>
                      <p className="text-sm text-muted-foreground">{color.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Semantic</h3>
              <div className="grid gap-4 sm:grid-cols-4">
                {colors.semantic.map((color) => (
                  <div key={color.name} className="overflow-hidden rounded-lg border">
                    <div className={`h-24 ${color.class}`} />
                    <div className="p-3">
                      <p className="font-medium">{color.name}</p>
                      <p className="text-sm text-muted-foreground">{color.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Typography</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {typography.map((type) => (
                  <div key={type.name} className="flex items-baseline gap-6 border-b pb-4 last:border-0 last:pb-0">
                    <div className="w-24 shrink-0">
                      <p className="font-medium">{type.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {type.size} / {type.weight}
                      </p>
                    </div>
                    <p style={{ fontSize: type.size, fontWeight: type.weight }}>
                      {type.sample}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Spacing Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Spacing</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { name: "4px", class: "w-1" },
                  { name: "8px", class: "w-2" },
                  { name: "12px", class: "w-3" },
                  { name: "16px", class: "w-4" },
                  { name: "24px", class: "w-6" },
                  { name: "32px", class: "w-8" },
                  { name: "48px", class: "w-12" },
                ].map((space) => (
                  <div key={space.name} className="flex items-center gap-4">
                    <span className="w-16 text-sm text-muted-foreground">{space.name}</span>
                    <div className={`h-4 ${space.class} rounded bg-primary`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Voice & Tone */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Voice & Tone</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">✓ Do</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Be clear and concise</li>
                  <li>• Use active voice</li>
                  <li>• Speak directly to the user</li>
                  <li>• Use sentence case for UI text</li>
                  <li>• Be helpful and friendly</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">✗ Don&apos;t</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Use jargon or buzzwords</li>
                  <li>• Be overly formal or stiff</li>
                  <li>• Use ALL CAPS (except acronyms)</li>
                  <li>• Use exclamation points excessively!</li>
                  <li>• Be condescending or robotic</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
