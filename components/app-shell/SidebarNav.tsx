"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="group/sidebar w-16 border-r border-border bg-card/50 transition-[width] duration-300 hover:w-56">
      <nav className="flex flex-col gap-2 p-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex h-10 w-10 items-center justify-center gap-3 rounded-lg text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground group-hover/sidebar:w-full group-hover/sidebar:justify-start group-hover/sidebar:px-3",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="hidden whitespace-nowrap group-hover/sidebar:inline-flex">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
