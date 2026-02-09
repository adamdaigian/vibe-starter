import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/get-started", label: "Get Started" },
  { href: "/docs", label: "Docs" },
  { href: "/setup", label: "Setup" },
  { href: "/design-system", label: "Design System" },
  { href: "/brand", label: "Brand" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight hover:opacity-80">
          ✨ Vibe Starter
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
