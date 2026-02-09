// Force dynamic rendering - requires Supabase env vars
export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const supabase = await createClient();

  // Zero-config mode: show a friendly setup message instead of crashing.
  if (!supabase) {
    return (
      <div className="min-h-screen bg-background">
        <main className="mx-auto max-w-2xl px-4 py-16">
          <h1 className="text-3xl font-bold">Supabase not configured</h1>
          <p className="mt-3 text-muted-foreground">
            This starter can run without Supabase. The dashboard (auth-protected)
            requires Supabase credentials.
          </p>
          <p className="mt-3 text-muted-foreground">
            Copy <code className="text-xs">.env.example</code> to{" "}
            <code className="text-xs">.env.local</code> and fill in your keys.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild variant="default">
              <Link href="/">Back home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Go to login</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

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
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <form action="/auth/signout" method="post">
              <Button variant="outline" size="sm" type="submit">
                Sign out
              </Button>
            </form>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Welcome back! This is a protected page.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>🔐 Authentication</CardTitle>
              <CardDescription>You&apos;re signed in</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This page is protected by Supabase Auth. Unauthenticated users 
                are redirected to the login page.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📊 Your Data</CardTitle>
              <CardDescription>Fetch from Supabase</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use the Supabase client to query your database. 
                See <code className="text-xs">src/lib/supabase/</code> for setup.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🚀 Next Steps</CardTitle>
              <CardDescription>Build your app</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Create tables in Supabase</li>
                <li>• Add Drizzle schema</li>
                <li>• Build your features</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
