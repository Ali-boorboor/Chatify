import Chat from "@/components/templates/Chat";
import { memo } from "react";

function ChatPage() {
  document.title = "Chatify | Chat it out !";

  return <Chat />;
}

export default memo(ChatPage);
