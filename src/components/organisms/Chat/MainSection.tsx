import useStates from "@/hooks/useStates";
import ChatBubble from "@/components/molecules/Chat/ChatBubble";
import { Socket } from "socket.io-client";
import { memo } from "react";

function MainSection({
  combinedItems,
  socket,
}: {
  combinedItems: any;
  socket: Socket;
}) {
  const { selectedChatID, userDatas } = useStates();

  return (
    selectedChatID && (
      <main className="flex h-full flex-col justify-start gap-4 py-4 px-6 md:px-20 xl:px-40">
        {combinedItems?.map((item: any, index: number) => (
          <ChatBubble
            key={item?._id || index}
            isThisUserMessage={item?.sender?._id === userDatas?.userID}
            fallBackText={item?.sender?.username?.slice(0, 2)}
            username={item?.sender?.username}
            identifier={item?.sender?.identifier}
            description={item?.sender?.description}
            message={item?.type === "message" ? item.message : undefined}
            media={item?.type === "media" ? item.media : undefined}
            imgSrc={item?.sender?.cover}
            createdAt={item?.createdAt}
            deleteMessageHandler={
              item?.type === "message"
                ? () => {
                    socket.emit("deleteMessage", {
                      messageID: item?._id,
                      chatID: selectedChatID,
                    });
                  }
                : () => {
                    socket.emit("deleteMedia", {
                      mediaID: item?._id,
                      chatID: selectedChatID,
                    });
                  }
            }
          />
        ))}
      </main>
    )
  );
}

export default memo(MainSection);
