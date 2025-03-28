import useStates from "@/hooks/useStates";
import MainSidebar from "@/components/organisms/sidebar/MainSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LayoutProps } from "@/types/organisms/types";
import { memo } from "react";

function Layout({ children }: LayoutProps) {
  const { userDatas } = useStates();

  return (
    <SidebarProvider>
      <MainSidebar />
      <main
        style={{
          background: `url(${userDatas?.background}) fixed center no-repeat`,
          backgroundSize: "cover",
        }}
        className={`z-0 w-full`}
      >
        <div className="w-full h-full fixed inset-0 backdrop-blur-xs -z-10"></div>
        {children}
      </main>
    </SidebarProvider>
  );
}

export default memo(Layout);
