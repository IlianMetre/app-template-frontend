import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Frontend-only home page</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Mock authentication is enabled to keep the UI flow intact without a backend.
          </p>
          <p className="text-sm text-muted-foreground">
            Use this starter as a base for building production-ready interfaces. Swap the mock
            guard with real auth when you are ready.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
