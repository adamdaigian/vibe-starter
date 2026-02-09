import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function isSet(value: string | undefined) {
  return !!value && value.trim().length > 0;
}

export default function SetupPage() {
  // Note: these read at build/runtime on the server. In dev, they update when you restart.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const databaseUrl = process.env.DATABASE_URL;

  const hasSupabase = isSet(supabaseUrl) && isSet(supabaseAnonKey);
  const hasDb = isSet(databaseUrl);

  const missing = [
    !isSet(supabaseUrl) ? "NEXT_PUBLIC_SUPABASE_URL" : null,
    !isSet(supabaseAnonKey) ? "NEXT_PUBLIC_SUPABASE_ANON_KEY" : null,
    !isSet(databaseUrl) ? "DATABASE_URL" : null,
  ].filter(Boolean) as string[];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Setup</h1>
        <p className="mt-2 text-muted-foreground">
          This repo supports <strong>zero-config mode</strong>. Supabase/DB are optional.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Supabase</CardTitle>
            <CardDescription>Auth + Database (optional)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              Status: {hasSupabase ? "✅ configured" : "⚠️ not configured"}
            </p>
            <p className="text-muted-foreground">
              To enable auth routes like <code>/login</code> and <code>/dashboard</code>,
              set Supabase env vars.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Database</CardTitle>
            <CardDescription>Drizzle migrations (optional)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>Status: {hasDb ? "✅ configured" : "⚠️ not configured"}</p>
            <p className="text-muted-foreground">
              Drizzle commands require <code>DATABASE_URL</code>.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Quick start</CardTitle>
          <CardDescription>Enable Supabase in under a minute</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Copy <code>.env.example</code> → <code>.env.local</code>
              <pre className="mt-2 rounded-md border bg-muted p-3 font-mono text-xs">cp .env.example .env.local</pre>
            </li>
            <li>
              Fill in values from Supabase settings (API + Database connection string).
            </li>
            <li>
              Push schema:
              <pre className="mt-2 rounded-md border bg-muted p-3 font-mono text-xs">npm run db:push</pre>
            </li>
          </ol>

          {missing.length > 0 ? (
            <div className="mt-4 rounded-md border border-destructive/30 bg-destructive/5 p-3">
              <p className="font-medium">Missing env vars</p>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                {missing.map((m) => (
                  <li key={m}>
                    <code>{m}</code>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mt-4 rounded-md border bg-muted/30 p-3">
              <p className="font-medium">Looks configured.</p>
              <p className="mt-1 text-muted-foreground">
                Next: try <Link className="underline" href="/dashboard">/dashboard</Link>.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <p className="mt-6 text-sm text-muted-foreground">
        Also see <Link className="underline" href="/docs">Docs</Link>.
      </p>
    </div>
  );
}
