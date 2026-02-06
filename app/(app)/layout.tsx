import { AppShell } from "@/components/app-shell/AppShell";
import { MockAuthGuard } from "@/components/app-shell/MockAuthGuard";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MockAuthGuard />
      <AppShell>{children}</AppShell>
    </div>
  );
}
