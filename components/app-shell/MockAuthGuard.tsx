"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const MOCK_AUTH_KEY = "mock-auth";

export function MockAuthGuard() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const isAuthed = localStorage.getItem(MOCK_AUTH_KEY) === "true";
    if (!isAuthed) {
      router.replace("/login");
    }
  }, [router]);

  return null;
}
