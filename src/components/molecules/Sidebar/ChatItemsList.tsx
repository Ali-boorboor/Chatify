import Divider from "@/components/atoms/Divider";
import ChatItem from "@/components/molecules/Sidebar/ChatItem";
import { ChatItemsListProps } from "@/types/molecules/types";
import { memo } from "react";

function ChatItemsList({ chats }: ChatItemsListProps) {
  return chats?.map((chat) => (
    <>
      <ChatItem
        chatID={chat?._id}
        imgSrc={chat?.cover}
        chatTitle={chat?.title}
        fallBackText={chat?.title?.slice(0, 2)}
      />
      <Divider />
    </>
  ));
}

export default memo(ChatItemsList);
