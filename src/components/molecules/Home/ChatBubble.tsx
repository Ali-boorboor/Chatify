import MainAvatar from "@/components/molecules/MainAvatar";
import { ChatBubbleProps } from "@/types/molecules/types";
import { memo } from "react";

function ChatBubble({
  isThisUserMessage,
  imgSrc,
  fallBackText,
  message,
}: ChatBubbleProps) {
  return (
    <div
      className={`flex items-start gap-4 max-w-full ${
        isThisUserMessage ? "justify-end" : "justify-start"
      }`}
    >
      {!isThisUserMessage && (
        <MainAvatar
          imgSrc={imgSrc}
          fallBackText={fallBackText}
          className="w-8 md:w-10 md:h-10 h-8 drop-shadow-lg"
        />
      )}
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
      {isThisUserMessage && (
        <MainAvatar
          imgSrc={imgSrc}
          fallBackText={fallBackText}
          className="w-8 md:w-10 md:h-10 h-8 drop-shadow-lg"
        />
      )}
    </div>
  );
}

export default memo(ChatBubble);
