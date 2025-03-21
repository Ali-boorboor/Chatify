import { HomeMessages } from "@/types/templates/types";

export type UserDatas = {
  userID: string;
  username: string;
  identifier: string;
};

export type StoreState = {
  authSection: string;
  isValidateEmail: boolean;
  hasLoading: boolean;
  userDatas: UserDatas;
  token: string;
  messages: HomeMessages[];
  message: string;
  selectedChatID: string;

  setAuthSection: (authSection: string) => void;
  setIsValidateEmail: (isValidateEmail: boolean) => void;
  setHasLoading: (hasLoading: boolean) => void;
  setUserID: (userID: string) => void;
  setUsername: (username: string) => void;
  setIdentifier: (identifier: string) => void;
  setToken: (token: string) => void;
  setMessage: (message: string) => void;
  setMessages: (messages: HomeMessages[]) => void;
  addMessage: (newMessage: HomeMessages) => void;
  setSelectedChatID: (selectedChatID: string) => void;
};
