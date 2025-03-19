import ToolTip from "@/components/atoms/ToolTip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoIosSend } from "react-icons/io";
import { memo } from "react";

function ChatInput() {
  return (
    <div className="flex max-w-full items-center gap-4">
      <Input type="text" placeholder="Type Message" />
      <ToolTip tooltipText="Send Message">
        <Button variant="green" type="submit">
          <IoIosSend />
        </Button>
      </ToolTip>
    </div>
  );
}

export default memo(ChatInput);
