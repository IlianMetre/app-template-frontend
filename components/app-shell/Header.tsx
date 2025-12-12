import { signOut } from "@/lib/auth";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  user: {
    email: string | null | undefined;
  };
};

export async function Header({ user }: HeaderProps) {
  const signOutAction = async () => {
    "use server";
    await signOut({ redirectTo: "/login" });
  };

  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-4">
      <div>
        <p className="text-lg font-semibold">App Template</p>
        <p className="text-sm text-muted-foreground">Production-ready Next.js starter</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">{user.email ?? "Unknown user"}</span>
        <form action={signOutAction}>
          <Button type="submit" size="sm" variant="outline">
            Logout
          </Button>
        </form>
      </div>
    </header>
  );
}
