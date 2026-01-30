"use client";

import { useRouter } from "next/navigation";
import { AppLogo } from "@/components/app-shell/AppLogo";
import { Button } from "@/components/ui/button";

const MOCK_AUTH_KEY = "mock-auth";

export function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem(MOCK_AUTH_KEY);
    router.replace("/login");
  };

  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-4">
      <AppLogo showTagline />
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Mock session</span>
        <Button type="button" size="sm" variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
}
