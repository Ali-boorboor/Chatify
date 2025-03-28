import useStates from "@/hooks/useStates";
import Divider from "@/components/atoms/Divider";
import ChatItem from "@/components/molecules/Sidebar/ChatItem";
import { ChatItemsListProps } from "@/types/molecules/types";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { memo } from "react";

function ChatItemsList({ chats }: ChatItemsListProps) {
  const { userDatas } = useStates();

  if (!chats || chats.length <= 0) {
    return (
      <Alert className="bg-yellow-500 text-black mt-2 text-center">
        <AlertTitle>No Chat Found</AlertTitle>
      </Alert>
    );
  }

  return chats?.map((chat) => {
    if (
      chat?.isPV &&
      chat?.title === userDatas?.username &&
      chat?.pvAccessUsers
    ) {
      return (
        <div key={chat?._id}>
          <ChatItem
            chatID={chat?._id}
            imgSrc={chat?.pvAccessUsers[0]?.cover}
            chatTitle={chat?.pvAccessUsers[0]?.username}
            fallBackText={chat?.pvAccessUsers[0]?.username?.slice(0, 2)}
            identifier={chat?.pvAccessUsers[0]?.identifier}
            description={chat?.pvAccessUsers[0]?.description}
            lastMessage={
              chat?.messages?.length &&
              chat?.messages[chat?.messages?.length - 1]?.message
            }
          />
          <Divider />
        </div>
      );
    } else {
      return (
        <div key={chat?._id}>
          <ChatItem
            chatID={chat?._id}
            imgSrc={chat?.cover}
            chatTitle={chat?.title}
            fallBackText={chat?.title?.slice(0, 2)}
            identifier={chat?.identifier}
            description={chat?.description}
            lastMessage={
              chat?.messages?.length &&
              chat?.messages[chat?.messages?.length - 1]?.message
            }
          />
          <Divider />
        </div>
      );
    }
  });
}

export default memo(ChatItemsList);
