import useStates from "@/hooks/useStates";
import ToolTip from "@/components/atoms/ToolTip";
import { ChatInputFormValues } from "@/types/molecules/types";
import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoIosSend } from "react-icons/io";
import { Socket } from "socket.io-client";
import { memo, useEffect } from "react";

function ChatInput({ socket }: { socket: Socket }) {
  const { userDatas, selectedChatID } = useStates();

  const handleMessageSubmit = (
    values: ChatInputFormValues,
    { resetForm }: FormikHelpers<ChatInputFormValues>
  ) => {
    socket.emit("sendNewMessage", {
      senderID: userDatas?.userID,
      message: values.message,
      chatID: selectedChatID,
    });

    resetForm();
  };

  return (
    <Formik initialValues={{ message: "" }} onSubmit={handleMessageSubmit}>
      {({ values, handleChange, resetForm }) => {
        useEffect(() => {
          resetForm();
        }, [selectedChatID, resetForm]);

        return (
          <Form>
            <div className="flex max-w-full items-center gap-4">
              <Input
                type="text"
                name="message"
                placeholder="Type Message"
                value={values.message}
                onBlur={() => {
                  socket.emit("isTyping", {
                    userID: userDatas.userID,
                    chatID: selectedChatID,
                    isTyping: false,
                  });
                }}
                onChange={(e) => {
                  handleChange(e);
                  socket.emit("isTyping", {
                    userID: userDatas.userID,
                    chatID: selectedChatID,
                    isTyping: true,
                  });
                }}
              />
              <ToolTip tooltipText="Send Message">
                <Button variant="green" type="submit">
                  <IoIosSend />
                </Button>
              </ToolTip>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default memo(ChatInput);
