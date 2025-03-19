import MainAvatar from "@/components/molecules/MainAvatar";
import UserDataDrawer from "@/components/organisms/UserDataDrawer";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { ChatItemProps } from "@/types/molecules/types";
import { memo } from "react";

function ChatItem({
  imgSrc,
  fallBackText,
  chatTitle,
  lastChatText,
  wrapperClassname,
}: ChatItemProps) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 cursor-pointer bg-accent text-foreground hover:opacity-60 transition-all duration-300 ease-linear ${wrapperClassname}`}
    >
      <Drawer>
        <DrawerTrigger>
          <MainAvatar
            imgSrc={imgSrc}
            fallBackText={fallBackText}
            className="cursor-pointer"
          />
        </DrawerTrigger>
        <UserDataDrawer />
      </Drawer>
      <div>
        <p className="font-semibold capitalize w-52 overflow-hidden text-ellipsis whitespace-nowrap drop-shadow-lg">
          {chatTitle}
        </p>
        {lastChatText && (
          <p className="font-normal w-52 overflow-hidden text-ellipsis whitespace-nowrap drop-shadow-lg">
            {lastChatText}
          </p>
        )}
      </div>
    </div>
  );
}

export default memo(ChatItem);
