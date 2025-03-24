import { ChatMessages, ChatInfos } from "@/types/templates/types";

export type UserDatas = {
  cover?: string;
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
  selectedFolder: string;
  messages: ChatMessages[];
  selectedChatInfo: ChatInfos | null;
  selectedChatID: string;
  isAddFolderModalOpen: boolean;
  selectedFolderChatValues: { id: string; title: string }[];

  setAuthSection: (authSection: string) => void;
  setIsValidateEmail: (isValidateEmail: boolean) => void;
  setHasLoading: (hasLoading: boolean) => void;
  setCover: (cover: string) => void;
  setUserID: (userID: string) => void;
  setUsername: (username: string) => void;
  setIdentifier: (identifier: string) => void;
  setToken: (token: string) => void;
  setSelectedFolder: (selectedFolder: string) => void;
  setMessages: (messages: ChatMessages[]) => void;
  addMessage: (newMessage: ChatMessages) => void;
  setSelectedChatInfo: (selectedChatInfo: ChatInfos | null) => void;
  setSelectedChatID: (selectedChatID: string) => void;
  setIsAddFolderModalOpen: (isAddFolderModalOpen: boolean) => void;
  toggleFolderChatSelection: (value: { id: string; title: string }) => void;
  setSelectedFolderChatValues: (selectedFolderChatValues: []) => void;
};
