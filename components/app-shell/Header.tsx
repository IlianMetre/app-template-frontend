"use client";

import { AppLogo } from "@/components/app-shell/AppLogo";
import { ProfileMenu } from "@/components/app-shell/ProfileMenu";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-4">
      <AppLogo showTagline />
      <ProfileMenu />
    </header>
  );
}
