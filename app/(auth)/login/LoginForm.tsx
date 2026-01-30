"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MOCK_AUTH_KEY = "mock-auth";

export default function LoginForm() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (localStorage.getItem(MOCK_AUTH_KEY) === "true") {
      router.replace("/");
    }
  }, [router]);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem(MOCK_AUTH_KEY, "true");
    router.replace("/");
  };

  return (
    <form className="space-y-4" onSubmit={handleLogin}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" placeholder="••••••••" />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
      <p className="text-xs text-muted-foreground">
        Mock login only: any credentials will continue to the app.
      </p>
    </form>
  );
}
