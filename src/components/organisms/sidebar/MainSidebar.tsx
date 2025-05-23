import useStates from "@/hooks/useStates";
import Divider from "@/components/atoms/Divider";
import MainAvatar from "@/components/atoms/MainAvatar";
import Settings from "@/components/organisms/sidebar/settings/settings";
import ChatItemsList from "@/components/molecules/Sidebar/ChatItemsList";
import FolderItemsList from "@/components/molecules/Sidebar/FolderItemsList";
import ChatItemSkeletons from "@/components/molecules/Sidebar/ChatItemSkeletons";
import { useGetFolderChats, usePostReq } from "@/hooks/useRequests";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
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

function MainSidebar() {
  const { token, selectedFolder, userDatas } = useStates();
  const { data, isLoading } = useGetFolderChats(selectedFolder);
  const { mutate: logoutRequest } = usePostReq({
    url: "/auth/logout",
    navigateTo: "/auth",
    successToastMsg: "Logged out Successfully",
    errorToastMsg: "Failed To Logout",
  });

  return (
    <Sidebar className="border-r border-foreground z-50">
      <SidebarHeader>
        <MainAvatar
          imgSrc={userDatas?.cover}
          fallBackText={userDatas?.username?.slice(0, 2)}
          className="mx-auto my-1 ring-chart-2"
        />
        <h1 className="text-center capitalize text-md md:text-xl font-bold">
          {userDatas?.username}
        </h1>
      </SidebarHeader>
      <SidebarContent className="scrollbar-hidden">
        <FolderItemsList />
        <SidebarGroupContent>
          <Divider />
          {isLoading ? (
            <ChatItemSkeletons />
          ) : (
            <ChatItemsList
              chats={
                selectedFolder === "all"
                  ? data?.data?.data
                  : data?.data?.data?.chats
              }
            />
          )}
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter>
        <Divider />
        <Sheet>
          <SheetTrigger asChild>
            <Button type="button">
              <IoMdSettings className="w-5 h-5" />
              <p className="capitalize font-semibold">settings</p>
            </Button>
          </SheetTrigger>
          <Settings />
        </Sheet>
        <Button
          variant="destructive"
          type="button"
          onClick={() => {
            logoutRequest({
              body: {},
              config: { headers: { Authorization: token } },
            });
          }}
        >
          <IoLogOut className="w-5 h-5" />
          <p className="capitalize font-semibold">Logout</p>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

export default memo(MainSidebar);
