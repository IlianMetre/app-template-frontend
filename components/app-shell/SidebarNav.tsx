"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings, X } from "lucide-react";
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

type SidebarNavProps = {
  mobileOpen?: boolean;
  onClose?: () => void;
};

export function SidebarNav({ mobileOpen = false, onClose }: SidebarNavProps) {
  const pathname = usePathname();

  const navContent = (
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
            onClick={onClose}
            className={cn(
              "flex h-10 items-center gap-3 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
              isActive
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground"
            )}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center">
              <Icon className="h-5 w-5" />
            </span>
            {/* Desktop: animate label on sidebar hover. Mobile: always show. */}
            <span className="whitespace-nowrap md:translate-x-2 md:opacity-0 md:transition-[opacity,transform] md:delay-0 md:duration-200 md:group-hover/sidebar:translate-x-0 md:group-hover/sidebar:opacity-100 md:group-hover/sidebar:delay-150">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar: collapsed, hover to expand */}
      <aside className="group/sidebar hidden w-16 overflow-hidden border-r border-border bg-card/50 transition-[width] duration-300 hover:w-56 md:block">
        {navContent}
      </aside>

      {/* Mobile sidebar: overlay drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/40 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={onClose}
          aria-hidden="true"
        />
        {/* Drawer */}
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-64 bg-background border-r border-border shadow-lg transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="text-sm font-semibold">Navigation</p>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Close navigation menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          {navContent}
        </aside>
      </div>
    </>
  );
}
