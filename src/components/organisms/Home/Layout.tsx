import AppSidebar from "@/components/organisms/Home/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LayoutProps } from "@/types/organisms/types";
import { memo } from "react";

function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "20rem",
      }}
    >
      <AppSidebar />
      <main className="w-full bg-[url('/bg-test.png')] bg-center bg-fixed bg-cover z-0">
        <div className="w-full h-full fixed inset-0 backdrop-blur-xs -z-10"></div>
        {children}
      </main>
    </SidebarProvider>
  );
}

export default memo(Layout);
