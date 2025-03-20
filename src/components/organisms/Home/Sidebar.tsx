import Divider from "@/components/atoms/Divider";
import MainAvatar from "@/components/atoms/MainAvatar";
import ChatItem from "@/components/molecules/Sidebar/ChatItem";
import ChatItemSkeleton from "@/components/molecules/Sidebar/ChatItemSkeleton";
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
  return (
    <Sidebar className="border-r border-foreground">
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
          <ChatItem
            imgSrc="https://github.com/shadcn.png"
            fallBackText="ab"
            chatTitle="ali boorboor"
            lastChatText="are you sure about that ?"
            wrapperClassname="bg-chart-2"
          />
          <Divider />
          <ChatItem
            imgSrc="https://github.com/shadcn.png"
            fallBackText="ab"
            chatTitle="ali boorboor"
            lastChatText="are you sure about that ?"
            notifCounts={3}
          />
          <Divider />
          <ChatItem
            imgSrc="https://github.com/shadcn.png"
            fallBackText="ab"
            chatTitle="ali boorboor"
            lastChatText="are you sure about that ?"
            notifCounts="2"
          />
          <ChatItemSkeleton />
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
