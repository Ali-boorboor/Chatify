import MainAvatar from "@/components/atoms/MainAvatar";
import UserDataDrawer from "@/components/organisms/Home/UserDataDrawer";
import NotificationBadge from "@/components/atoms/NotificationBadge";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { ChatItemProps } from "@/types/molecules/types";
import { memo } from "react";

function ChatItem({
  imgSrc,
  chatTitle,
  notifCounts,
  lastChatText,
  fallBackText,
  wrapperClassname,
}: ChatItemProps) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 cursor-pointer bg-accent text-foreground hover:opacity-60 transition-all duration-300 ease-linear ${wrapperClassname}`}
    >
      <Sheet>
        <SheetTrigger>
          <MainAvatar
            imgSrc={imgSrc}
            fallBackText={fallBackText}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <UserDataDrawer />
      </Sheet>
      <div>
        <p className="font-semibold capitalize w-44 md:w-48 overflow-hidden text-ellipsis whitespace-nowrap drop-shadow-lg">
          {chatTitle}
        </p>
        {lastChatText && (
          <p className="font-normal w-44 md:w-48 overflow-hidden text-ellipsis whitespace-nowrap drop-shadow-lg">
            {lastChatText}
          </p>
        )}
      </div>
      {notifCounts && (
        <NotificationBadge
          variant="green"
          notifText={notifCounts}
          className="w-6 h-6 rounded-full ring-2 ring-foreground"
        />
      )}
    </div>
  );
}

export default memo(ChatItem);
