import ChatInput from "@/components/molecules/Chat/ChatInput";
import { Socket } from "socket.io-client";
import { memo } from "react";

function FooterSection({ socket }: { socket: Socket }) {
  return (
    <footer className="sticky bottom-0 z-50 md:pb-4 md:px-20 xl:px-40 backdrop-blur-xs drop-shadow-lg">
      <div className="bg-accent p-4 md:rounded-xl">
        <ChatInput socket={socket} />
      </div>
    </footer>
  );
}

export default memo(FooterSection);
