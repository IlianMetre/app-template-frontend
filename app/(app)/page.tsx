import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { requireUser } from "@/lib/session";

export default async function HomePage() {
  const user = await requireUser();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Authenticated home page</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Signed in as{" "}
            <span className="font-medium text-foreground">{user.email ?? "Unknown user"}</span>.
          </p>
          <p className="text-sm text-muted-foreground">
            Use this starter as a base for building production-grade features. The shell layout,
            authentication, and database wiring are ready to go.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
