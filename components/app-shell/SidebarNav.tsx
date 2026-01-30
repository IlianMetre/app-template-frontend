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
    <aside className="group/sidebar w-56 border-r border-border bg-card/50 transition-[width] duration-300 md:w-16 md:hover:w-56">
      <nav className="flex flex-col gap-2 p-3 md:p-4">
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
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground md:h-11 md:w-11 md:justify-center md:px-0 md:group-hover/sidebar:h-auto md:group-hover/sidebar:w-full md:group-hover/sidebar:justify-start md:group-hover/sidebar:px-3",
                isActive
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="transition-all duration-300 md:opacity-0 md:-translate-x-2 md:group-hover/sidebar:opacity-100 md:group-hover/sidebar:translate-x-0">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
