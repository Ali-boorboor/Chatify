import MainAvatar from "@/components/molecules/MainAvatar";
import UserDataDrawer from "@/components/organisms/UserDataDrawer";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { ChatBubbleProps } from "@/types/molecules/types";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { memo } from "react";

function ChatBubble({
  isThisUserMessage,
  imgSrc,
  fallBackText,
  message,
}: ChatBubbleProps) {
  return (
    <>
      <div
        className={`flex items-start gap-4 max-w-full ${
          isThisUserMessage ? "justify-end" : "justify-start"
        }`}
      >
        <ContextMenu>
          {!isThisUserMessage && (
            <Drawer>
              <DrawerTrigger>
                <MainAvatar
                  imgSrc={imgSrc}
                  fallBackText={fallBackText}
                  className="w-8 md:w-10 md:h-10 h-8 cursor-pointer"
                />
              </DrawerTrigger>
              <UserDataDrawer />
            </Drawer>
          )}
          <ContextMenuTrigger>
            <p
              className={`break-all max-w-6xl text-foreground rounded-xl px-4 py-2 relative z-10 drop-shadow-lg ${
                isThisUserMessage ? "bg-chart-2" : "bg-accent"
              }`}
            >
              {message}
              <span
                className={`absolute w-4 h-4 bg-inherit rotate-45 -z-10 top-3 ${
                  isThisUserMessage ? "-right-1" : "-left-1"
                }`}
              ></span>
            </p>
          </ContextMenuTrigger>
          {isThisUserMessage && (
            <MainAvatar
              imgSrc={imgSrc}
              fallBackText={fallBackText}
              className="w-8 md:w-10 md:h-10 h-8 ring-chart-2"
            />
          )}
          <ContextMenuContent>
            <ContextMenuItem>
              <MdModeEdit />
              <p>Edit</p>
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <MdDelete />
              <p>Delete</p>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </>
  );
}

export default memo(ChatBubble);
