import useStates from "@/hooks/useStates";
import ChatBubble from "@/components/molecules/Chat/ChatBubble";
import { memo } from "react";

function MainSection({ combinedItems }: any) {
  const { selectedChatID, userDatas } = useStates();

  return (
    selectedChatID && (
      <main className="flex h-full flex-col justify-start gap-4 py-4 px-6 md:px-20 xl:px-40">
        {combinedItems?.map((item: any, index: number) => (
          <ChatBubble
            key={item._id || index}
            isThisUserMessage={item?.sender?._id === userDatas?.userID}
            fallBackText={item?.sender?.username?.slice(0, 2)}
            username={item?.sender?.username}
            identifier={item?.sender?.identifier}
            description={item?.sender?.description}
            message={item.type === "message" ? item.message : undefined}
            media={item.type === "media" ? item.media : undefined}
            imgSrc={item?.sender?.cover}
            createdAt={item?.createdAt}
          />
        ))}
      </main>
    )
  );
}

export default memo(MainSection);
