"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemeToggleButtonProps = {
  className?: string;
  showLabel?: boolean;
};

export function ThemeToggleButton({ className, showLabel = true }: ThemeToggleButtonProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = useMemo(() => resolvedTheme === "dark", [resolvedTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled
        className={cn("gap-2 transition-all", className)}
      >
        <span className="relative h-4 w-4" />
        {showLabel ? <span>&nbsp;</span> : null}
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleToggle}
      className={cn("gap-2 transition-all", className)}
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
      {showLabel ? <span>{isDark ? "Switch to Light" : "Switch to Dark"}</span> : null}
    </Button>
  );
}
