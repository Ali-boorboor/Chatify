import Divider from "@/components/atoms/Divider";
import MainAvatar from "@/components/atoms/MainAvatar";
import ChatItemsList from "@/components/molecules/Sidebar/ChatItemsList";
import ChatItemSkeletons from "@/components/molecules/Sidebar/ChatItemSkeletons";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useGetReq } from "@/hooks/useRequests";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { memo } from "react";

function AppSidebar() {
  const { data: chats, isLoading } = useGetReq({
    url: "/chat",
    queryKey: "CHATS",
    cacheTime: 86400000,
    staleTime: 86400000,
    errorToastMsg: "Failed To Get Chats",
  });

  return (
    <Sidebar className="border-r border-foreground z-50">
      <SidebarHeader>
        <MainAvatar
          imgSrc=""
          fallBackText="ab"
          className="mx-auto my-1 ring-chart-2"
        />
        <h1 className="text-center capitalize text-md md:text-xl font-bold">
          ali boorboor
        </h1>
        <Input type="text" placeholder="Search" />
      </SidebarHeader>
      <SidebarContent className="scrollbar-hidden">
        <SidebarGroupContent>
          <Divider />
          <nav className="flex items-center gap-4 py-1 px-3 overflow-x-auto scrollbar">
            <Button variant="green">All</Button>
            <Button variant="outline">Folder 1</Button>
            <Button variant="outline">Folder 2</Button>
          </nav>
          <Divider />
        </SidebarGroupContent>
        <SidebarGroupContent>
          <Divider />
          {isLoading ? (
            <ChatItemSkeletons />
          ) : chats?.status === 204 ? (
            <Alert className="bg-yellow-500 text-black mt-2 text-center">
              <AlertTitle>No Chat Found</AlertTitle>
            </Alert>
          ) : (
            <ChatItemsList chats={chats?.data?.data} />
          )}
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter>
        <Divider />
        <Button>
          <IoMdSettings className="w-5 h-5" />
          <p className="capitalize font-semibold">settings</p>
        </Button>
        <Button variant="destructive">
          <IoLogOut className="w-5 h-5" />
          <p className="capitalize font-semibold">Logout</p>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

export default memo(AppSidebar);
