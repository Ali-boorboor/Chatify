import useStates from "@/hooks/useStates";
import Layout from "@/components/organisms/Layout";
import MainSection from "@/components/organisms/Chat/MainSection";
import HeaderSection from "@/components/organisms/Chat/HeaderSection";
import FooterSection from "@/components/organisms/Chat/FooterSection";
import { ChatInfos } from "@/types/templates/types";
import { memo, useEffect, useMemo } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4030/", { transports: ["websocket"] });

function Chat() {
  const {
    selectedChatID,
    messages,
    medias,
    userTypingData,
    onlineUsersCount,
    setMessages,
    addMessage,
    removeMessage,
    setMedias,
    addMedia,
    removeMedia,
    setSelectedChatInfo,
    setUserTypingData,
    setOnlineUsersCount,
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

      socket.on(
        "isTyping",
        ({ isTyping, username }: { isTyping: boolean; username: string }) => {
          setUserTypingData({ isTyping, username });
        }
      );

      socket.on("onlineUsers", (onlineUsers) => {
        setOnlineUsersCount(onlineUsers);
      });

      socket.on("newMessage", (newMessage) => {
        addMessage(newMessage);
      });

      socket.on("messageDeleted", (deleteMessage) => {
        removeMessage(deleteMessage?.messageID);
      });

      socket.on("newMedia", (newMedia) => {
        addMedia(newMedia);
      });

      socket.on("mediaDeleted", (deleteMedia) => {
        removeMedia(deleteMedia?.mediaID);
      });
    }

    return () => {
      socket.off("joinChat");
      socket.off("chatInfo");
      socket.emit("leaveChat", selectedChatID);
      socket.off("leaveChat");
      socket.off("isTyping");
      socket.off("onlineUsers");
      socket.off("newMessage");
      socket.off("newMedia");
    };
  }, [
    selectedChatID,
    userTypingData,
    onlineUsersCount,
    addMedia,
    addMessage,
    removeMedia,
    removeMessage,
  ]);

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
        <HeaderSection />
        <MainSection socket={socket} combinedItems={combinedItems} />
        <FooterSection socket={socket} />
      </div>
    </Layout>
  );
}

export default memo(Chat);
