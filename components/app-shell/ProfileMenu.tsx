"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Moon, Settings, Sun, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { appConfig } from "@/lib/app-config";
import { cn } from "@/lib/utils";

const MOCK_AUTH_KEY = "mock-auth";

export function ProfileMenu() {
  const router = useRouter();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isDark = useMemo(() => resolvedTheme === "dark", [resolvedTheme]);

  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    firstItemRef.current?.focus();

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || buttonRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const initials = appConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem(MOCK_AUTH_KEY);
    router.replace("/login");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

  const menuItemClass =
    "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const themeItemClass = (value: "light" | "dark" | "system") =>
    cn(menuItemClass, theme === value ? "bg-accent text-accent-foreground" : "text-foreground");

  return (
    <div className="relative" onKeyDown={handleKeyDown}>
      <button
        type="button"
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-foreground transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {initials}
      </button>
      <div
        ref={menuRef}
        role="menu"
        aria-hidden={!open}
        className={cn(
          "absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-lg border border-border bg-background p-2 text-foreground shadow-lg transition-all duration-200",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        )}
      >
        <div className="px-2 pb-2 pt-1">
          <p className="text-xs font-medium uppercase text-muted-foreground">Mock account</p>
          <p className="text-sm font-semibold">{appConfig.name}</p>
        </div>
        <button
          type="button"
          ref={firstItemRef}
          className={menuItemClass}
          onClick={() => router.push("/settings")}
          role="menuitem"
        >
          <Settings className="h-4 w-4" />
          Settings
        </button>
        <div className="mt-1 border-t border-border pt-2">
          <p className="px-3 pb-1 text-xs font-medium uppercase text-muted-foreground">Theme</p>
          <button
            type="button"
            className={themeItemClass("light")}
            onClick={() => setTheme("light")}
            role="menuitem"
          >
            <Sun className="h-4 w-4" />
            Light
          </button>
          <button
            type="button"
            className={themeItemClass("dark")}
            onClick={() => setTheme("dark")}
            role="menuitem"
          >
            <Moon className="h-4 w-4" />
            Dark
          </button>
          <button
            type="button"
            className={themeItemClass("system")}
            onClick={() => setTheme("system")}
            role="menuitem"
          >
            <span className="relative h-4 w-4">
              <Sun
                className={cn(
                  "absolute left-0 top-0 h-4 w-4 transition-all duration-300",
                  isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                )}
              />
              <Moon
                className={cn(
                  "absolute left-0 top-0 h-4 w-4 transition-all duration-300",
                  isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                )}
              />
            </span>
            System
          </button>
        </div>
        <button type="button" className={menuItemClass} onClick={handleLogout} role="menuitem">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
}
