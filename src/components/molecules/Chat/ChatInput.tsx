import useStates from "@/hooks/useStates";
import ToolTip from "@/components/atoms/ToolTip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoIosSend } from "react-icons/io";
import { Socket } from "socket.io-client";
import { memo } from "react";

function ChatInput({ socket }: { socket: Socket }) {
  const { userDatas, chatID, message, setMessage } = useStates();

  const handleMessageSubmit = () => {
    socket.emit("sendNewMessage", {
      chatID: "67d8825644546acc3be07d18",
      senderID: userDatas?.userID,
      message,
    });

    setMessage("");
  };

  return (
    <div className="flex max-w-full items-center gap-4">
      <Input
        type="text"
        placeholder="Type Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ToolTip tooltipText="Send Message">
        <Button variant="green" type="submit" onClick={handleMessageSubmit}>
          <IoIosSend />
        </Button>
      </ToolTip>
    </div>
  );
}

export default memo(ChatInput);
