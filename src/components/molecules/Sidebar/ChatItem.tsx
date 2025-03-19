import MainAvatar from "@/components/molecules/MainAvatar";
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
      <MainAvatar imgSrc={imgSrc} fallBackText={fallBackText} />
      <div>
        <p className="font-semibold capitalize w-52 overflow-hidden text-ellipsis whitespace-nowrap">
          {chatTitle}
        </p>
        {lastChatText && (
          <p className="font-normal w-52 overflow-hidden text-ellipsis whitespace-nowrap">
            {lastChatText}
          </p>
        )}
      </div>
    </div>
  );
}

export default memo(ChatItem);
