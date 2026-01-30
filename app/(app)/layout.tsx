import { Header } from "@/components/app-shell/Header";
import { SidebarNav } from "@/components/app-shell/SidebarNav";
import { MockAuthGuard } from "@/components/app-shell/MockAuthGuard";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MockAuthGuard />
      <Header />
      <div className="flex flex-1">
        <SidebarNav />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
