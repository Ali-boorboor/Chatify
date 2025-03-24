import Divider from "@/components/atoms/Divider";
import ChatItem from "@/components/molecules/Sidebar/ChatItem";
import { ChatItemsListProps } from "@/types/molecules/types";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { memo } from "react";

function ChatItemsList({ chats }: ChatItemsListProps) {
  if (!chats) {
    return (
      <Alert className="bg-yellow-500 text-black mt-2 text-center">
        <AlertTitle>No Chat Found</AlertTitle>
      </Alert>
    );
  }

  return chats?.map((chat) => (
    <div key={chat?._id}>
      <ChatItem
        chatID={chat?._id}
        imgSrc={chat?.cover}
        chatTitle={chat?.title}
        fallBackText={chat?.title?.slice(0, 2)}
        identifier={chat?.identifier}
        description={chat?.description}
      />
      <Divider />
    </div>
  ));
}

export default memo(ChatItemsList);
