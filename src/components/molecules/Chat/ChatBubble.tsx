import MainAvatar from "@/components/atoms/MainAvatar";
import UserDataDrawer from "@/components/organisms/UserDataDrawer";
import UserDatasHoverCard from "@/components/atoms/UserDatasHoverCard";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { ChatBubbleProps } from "@/types/molecules/types";
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
  media,
  username,
  identifier,
  description,
  createdAt,
  deleteMessageHandler,
}: ChatBubbleProps) {
  const messageDate = new Date(createdAt);

  return (
    <>
      <div
        className={`flex items-start gap-4 max-w-full ${
          isThisUserMessage ? "justify-end" : "justify-start"
        }`}
      >
        <ContextMenu>
          {!isThisUserMessage && (
            <Sheet>
              <HoverCard>
                <SheetTrigger>
                  <HoverCardTrigger>
                    <MainAvatar
                      imgSrc={imgSrc}
                      fallBackText={fallBackText}
                      className="w-8 md:w-10 md:h-10 h-8 cursor-pointer"
                    />
                  </HoverCardTrigger>
                  <UserDatasHoverCard
                    imgSrc={imgSrc}
                    fallBackText={fallBackText}
                    username={username}
                    identifier={identifier}
                  />
                </SheetTrigger>
                <UserDataDrawer
                  title={username}
                  identifier={identifier}
                  cover={imgSrc}
                  description={description}
                />
              </HoverCard>
            </Sheet>
          )}
          <ContextMenuTrigger>
            <div
              className={`break-all max-w-6xl text-foreground rounded-xl px-4 py-2 relative z-10 drop-shadow-lg ${
                isThisUserMessage ? "bg-chart-2" : "bg-accent"
              }`}
            >
              {message ? (
                <span>{message}</span>
              ) : (
                <div className="max-w-4xl h-auto">
                  <img
                    src={media}
                    crossOrigin="anonymous"
                    alt="media"
                    className="w-full h-full rounded-xl object-cover object-center"
                  />
                </div>
              )}
              <span
                className={`absolute w-4 h-4 bg-inherit rotate-45 -z-10 top-3 ${
                  isThisUserMessage ? "-right-1" : "-left-1"
                }`}
              ></span>
              <p
                className={`text-right mt-1 ${
                  isThisUserMessage ? "text-gray-200" : "text-gray-400"
                } text-xs font-bold`}
              >
                {`${
                  messageDate.getHours() <= 9
                    ? `0${messageDate.getHours()}`
                    : messageDate.getHours()
                } : ${
                  messageDate.getMinutes() <= 9
                    ? `0${messageDate.getMinutes()}`
                    : messageDate.getMinutes()
                }`}
              </p>
            </div>
          </ContextMenuTrigger>
          {isThisUserMessage && (
            <MainAvatar
              imgSrc={imgSrc}
              fallBackText={fallBackText}
              className="w-8 md:w-10 md:h-10 h-8 ring-chart-2"
            />
          )}
          {isThisUserMessage && (
            <ContextMenuContent>
              <ContextMenuItem
                variant="destructive"
                onClick={deleteMessageHandler}
              >
                <MdDelete />
                <p>Delete</p>
              </ContextMenuItem>
            </ContextMenuContent>
          )}
        </ContextMenu>
      </div>
    </>
  );
}

export default memo(ChatBubble);
