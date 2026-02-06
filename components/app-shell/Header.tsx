"use client";

import { Menu } from "lucide-react";
import { AppLogo } from "@/components/app-shell/AppLogo";
import { ProfileMenu } from "@/components/app-shell/ProfileMenu";

type HeaderProps = {
  onMenuToggle?: () => void;
};

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-border px-4 py-3 md:px-6 md:py-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuToggle}
          className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <AppLogo showTagline />
      </div>
      <ProfileMenu />
    </header>
  );
}
