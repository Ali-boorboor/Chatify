import useStates from "@/hooks/useStates";
import ToolTip from "@/components/atoms/ToolTip";
import { ChatInputFormValues } from "@/types/molecules/types";
import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@/components/ui/button";
import { ImFilePicture } from "react-icons/im";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FaSortDown } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Socket } from "socket.io-client";
import { memo, useEffect } from "react";

function ChatInput({ socket }: { socket: Socket }) {
  const { userDatas, selectedChatID } = useStates();

  const scrollDown = () => window.scrollTo(0, document.body.scrollHeight);

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
              <ToolTip tooltipText="Upload Media">
                <Label htmlFor="file" className="cursor-pointer">
                  <div className="h-9 px-4 py-2 has-[>svg]:px-3 bg-chart-2 text-foreground rounded-md flex items-center gap-1">
                    <ImFilePicture />
                  </div>
                  <Input
                    hidden
                    id="file"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e: any) => {
                      socket.emit("sendNewMedia", {
                        fileName: e.target?.files[0]?.name,
                        senderID: userDatas?.userID,
                        file: e.target?.files[0],
                        chatID: selectedChatID,
                      });
                    }}
                  />
                </Label>
              </ToolTip>
              <ToolTip tooltipText="Move Down">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={scrollDown}
                  className="fixed right-20 xl:right-40 bottom-24 xl:bottom-44 ring-2 ring-foreground z-50"
                >
                  <FaSortDown />
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
