import { HomeMessages } from "@/types/templates/types";

export type UserDatas = {
  userID: string;
  username: string;
  identifier: string;
};

export type StoreState = {
  userDatas: UserDatas;
  token: string;
  messages: HomeMessages[];
  message: string;
  chatID: string;

  setUserID: (userID: string) => void;
  setUsername: (username: string) => void;
  setIdentifier: (identifier: string) => void;
  setToken: (token: string) => void;
  setMessage: (message: string) => void;
  setMessages: (messages: HomeMessages[]) => void;
  addMessage: (newMessage: HomeMessages) => void;
  setChatID: (chatID: string) => void;
};
