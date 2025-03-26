import useStates from "@/hooks/useStates";
import MainAvatar from "@/components/atoms/MainAvatar";
import Layout from "@/components/organisms/Chat/Layout";
import ChatInput from "@/components/molecules/Chat/ChatInput";
import ChatBubble from "@/components/molecules/Chat/ChatBubble";
import UserDataDrawer from "@/components/organisms/Chat/UserDataDrawer";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { memo, useEffect, useMemo, useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChatInfos } from "@/types/templates/types";
import { io } from "socket.io-client";

const socket = io("http://192.168.1.100:4030/");

function Chat() {
  const [UserTypingData, setUserTypingData] = useState({
    isTyping: false,
    username: "",
  });
  const [onlineUsersCount, setOnlineUsersCount] = useState(0);
  const {
    selectedChatID,
    messages,
    medias,
    userDatas,
    selectedChatInfo,
    setMessages,
    addMessage,
    setMedias,
    addMedia,
    setSelectedChatInfo,
  } = useStates();

  useEffect(() => window.scrollTo(0, document.body.scrollHeight));

  useEffect(() => {
    if (selectedChatID) {
      socket.emit("joinChat", {
        chatID: selectedChatID,
      });

      socket.on("chatInfos", (ChatInfos: ChatInfos) => {
        setSelectedChatInfo(ChatInfos);
        setMessages(ChatInfos?.messages);
        setMedias(ChatInfos?.medias);
      });
    }

    return () => {
      socket.off("joinChat");
      socket.off("chatInfo");
      socket.emit("leaveChat", selectedChatID);
      socket.off("leaveChat");
    };
  }, [selectedChatID]);

  useEffect(() => {
    socket.on(
      "isTyping",
      ({ isTyping, username }: { isTyping: boolean; username: string }) => {
        setUserTypingData({ isTyping, username });
      }
    );

    socket.on("onlineUsers", (onlineUsers) => {
      setOnlineUsersCount(onlineUsers);
    });

    return () => {
      socket.off("isTyping");
      socket.off("onlineUsers");
    };
  }, [selectedChatID, UserTypingData, onlineUsersCount]);

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      addMessage(newMessage);
    });

    socket.on("newMedia", (newMedia) => {
      addMedia(newMedia);
    });

    return () => {
      socket.off("newMessage");
      socket.off("newMedia");
    };
  }, [addMessage, addMedia]);

  const combinedItems = useMemo(() => {
    const safeMessages = messages || [];
    const safeMedias = medias || [];

    const combined = [
      ...safeMessages.map((msg) => ({
        ...msg,
        type: "message",
        message: msg.message,
        media: undefined,
      })),
      ...safeMedias.map((media) => ({
        ...media,
        type: "media",
        message: undefined,
        media: media.media,
      })),
    ];

    return combined.sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }, [messages, medias]);

  return (
    <Layout>
      <div className="flex flex-col h-full justify-between relative">
        <header className="sticky top-0 z-50 drop-shadow-lg border-b border-foreground">
          <nav className="py-2.5 bg-accent flex items-center px-20 xl:px-40 relative">
            <SidebarTrigger className="bg-accent-foreground text-accent absolute left-4" />
            <Sheet>
              <div className="flex items-center gap-4">
                {selectedChatID && (
                  <SheetTrigger>
                    <MainAvatar
                      imgSrc={selectedChatInfo?.cover}
                      fallBackText={selectedChatInfo?.title?.slice(0, 2)!}
                      className="md:w-10 md:h-10"
                    />
                  </SheetTrigger>
                )}
                <div className="flex flex-col gap-0.5">
                  <p className="font-semibold capitalize w-60 overflow-hidden text-ellipsis whitespace-nowrap drop-shadow-lg">
                    {selectedChatID
                      ? selectedChatInfo?.title
                      : "select a chat to view"}
                  </p>
                  <p className="font-semibold text-sm text-gray-400 italic lowercase">
                    {selectedChatID && UserTypingData?.isTyping ? (
                      <span className="animate-pulse">
                        {UserTypingData?.username} is typing...
                      </span>
                    ) : selectedChatID ? (
                      `${onlineUsersCount} online ${
                        onlineUsersCount <= 1 ? "user" : "users"
                      }`
                    ) : null}
                  </p>
                </div>
              </div>
              <UserDataDrawer
                title={selectedChatInfo?.title!}
                cover={selectedChatInfo?.cover}
                identifier={selectedChatInfo?.identifier!}
                description={selectedChatInfo?.description}
              />
            </Sheet>
          </nav>
        </header>
        {selectedChatID && (
          <>
            <main className="flex h-full flex-col justify-start gap-4 py-4 px-6 md:px-20 xl:px-40">
              {combinedItems?.map((item, index) => (
                <ChatBubble
                  key={item._id || index}
                  isThisUserMessage={item?.sender?._id === userDatas?.userID}
                  fallBackText={item?.sender?.username?.slice(0, 2)}
                  username={item?.sender?.username}
                  identifier={item?.sender?.identifier}
                  description={item?.sender?.description}
                  message={item.type === "message" ? item.message : undefined}
                  media={item.type === "media" ? item.media : undefined}
                />
              ))}
            </main>
            <footer className="sticky bottom-0 z-50 md:pb-4 md:px-20 xl:px-40 backdrop-blur-xs drop-shadow-lg">
              <div className="bg-accent p-4 md:rounded-xl">
                <ChatInput socket={socket} />
              </div>
            </footer>
          </>
        )}
      </div>
    </Layout>
  );
}

export default memo(Chat);
