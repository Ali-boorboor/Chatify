import useStates from "@/hooks/useStates";
import Layout from "@/components/organisms/Chat/Layout";
import MainAvatar from "@/components/atoms/MainAvatar";
import ChatInput from "@/components/molecules/Chat/ChatInput";
import ChatBubble from "@/components/molecules/Chat/ChatBubble";
import UserDataDrawer from "@/components/organisms/Chat/UserDataDrawer";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { HomeMessages } from "@/types/templates/types";
import { useGetReq } from "@/hooks/useRequests";
import { memo, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4030/");

function Chat() {
  const { selectedChatID, messages, userDatas, setMessages, addMessage } =
    useStates();

  // const { data: chats, isLoading } = useGetReq({
  //   url: "/chat",
  //   queryKey: "CHATS",
  //   cacheTime: 86400000,
  //   staleTime: 86400000,
  //   errorToastMsg: "Failed To Get Chats",
  // });

  useEffect(() => {
    socket.emit("joinChat", {
      userID: userDatas?.userID,
      chatID: selectedChatID,
    });

    socket.on("chatHistory", (Messages) => {
      setMessages(Messages);
    });

    return () => {
      socket.off("joinChat");
      socket.off("chatHistory");
    };
  }, [selectedChatID]);

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      addMessage(newMessage);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [addMessage]);

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
                      imgSrc=""
                      fallBackText="sb"
                      className="md:w-10 md:h-10"
                    />
                  </SheetTrigger>
                )}
                <div className="flex flex-col gap-0.5">
                  <p className="font-semibold capitalize w-60 overflow-hidden text-ellipsis whitespace-nowrap drop-shadow-lg">
                    {selectedChatID ? "test" : "select a chat to view"}
                  </p>
                  <p className="font-semibold text-sm text-gray-400 italic lowercase">
                    {selectedChatID && "last seen recently"}
                  </p>
                </div>
              </div>
              <UserDataDrawer />
            </Sheet>
          </nav>
        </header>
        {selectedChatID && (
          <>
            <main className="flex h-full flex-col justify-start gap-4 py-4 px-6 md:px-20 xl:px-40">
              {messages.map((message: HomeMessages) => {
                return (
                  <ChatBubble
                    key={message?._id}
                    message={message?.message}
                    imgSrc={message?.sender?.cover}
                    fallBackText={message?.sender?.username?.slice(0, 2)}
                    isThisUserMessage={
                      message?.sender?._id === userDatas?.userID
                    }
                  />
                );
              })}
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
