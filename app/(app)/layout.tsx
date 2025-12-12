import { Header } from "@/components/app-shell/Header";
import { SidebarNav } from "@/components/app-shell/SidebarNav";
import { requireUser } from "@/lib/session";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser();

  return (
    <div className="flex min-h-screen flex-col">
      <Header user={{ email: user.email }} />
      <div className="flex flex-1">
        <SidebarNav />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
