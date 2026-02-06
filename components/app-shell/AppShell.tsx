"use client";

import { useState, useCallback } from "react";
import { Header } from "@/components/app-shell/Header";
import { SidebarNav } from "@/components/app-shell/SidebarNav";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen((prev) => !prev);
  }, []);

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  return (
    <>
      <Header onMenuToggle={toggleMobileNav} />
      <div className="flex flex-1">
        <SidebarNav mobileOpen={mobileNavOpen} onClose={closeMobileNav} />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </>
  );
}
