import { create } from "zustand";
import { StoreState } from "@/types/states/types";
import { createJSONStorage, persist } from "zustand/middleware";

const useStates = create<StoreState>()(
  persist(
    (set) => ({
      // * auth sections state
      authSection: "login",
      setAuthSection: (authSection) => set({ authSection }),

      // * is validate email section of auth available (state)
      isValidateEmail: false,
      setIsValidateEmail: (isValidateEmail) => set({ isValidateEmail }),

      // * loading state
      hasLoading: false,
      setHasLoading: (hasLoading) => set({ hasLoading }),

      // * user datas state (will store in localStorage too)
      userDatas: {
        cover: "",
        userID: "",
        username: "",
        identifier: "",
      },
      setUserID: (userID) => {
        return set((state) => ({
          userDatas: { ...state.userDatas, userID },
        }));
      },
      setCover: (cover) => {
        return set((state) => ({
          userDatas: { ...state.userDatas, cover },
        }));
      },
      setUsername: (username) => {
        return set((state) => ({
          userDatas: { ...state.userDatas, username },
        }));
      },
      setIdentifier: (identifier) => {
        return set((state) => ({
          userDatas: { ...state.userDatas, identifier },
        }));
      },

      // * token state (will store in localStorage too)
      token: "",
      setToken: (token) => set({ token }),

      // * selected folder state
      selectedFolder: "all",
      setSelectedFolder: (selectedFolder) => set({ selectedFolder }),

      // * type new message input state
      messages: [],
      setMessages: (messages) => set({ messages }),
      addMessage: (newMessage) => {
        return set((state) => ({ messages: [...state.messages, newMessage] }));
      },

      // * chat Info state that user is in it
      selectedChatInfo: null,
      setSelectedChatInfo: (selectedChatInfo) => set({ selectedChatInfo }),

      // * chat id state that user is in it
      selectedChatID: "",
      setSelectedChatID: (selectedChatID) => set({ selectedChatID }),

      // * add chats to folder dialog (modal) state
      isAddFolderModalOpen: false,
      setIsAddFolderModalOpen: (isAddFolderModalOpen) => {
        return set({ isAddFolderModalOpen });
      },

      // * add chats to folder state
      selectedFolderChatValues: [],
      setSelectedFolderChatValues: (selectedFolderChatValues) =>
        set({ selectedFolderChatValues }),
      toggleFolderChatSelection: (chat) => {
        return set((state) => ({
          selectedFolderChatValues: state.selectedFolderChatValues.some(
            (item) => item.id === chat.id
          )
            ? state.selectedFolderChatValues.filter(
                (item) => item.id !== chat.id
              )
            : [...state.selectedFolderChatValues, chat],
        }));
      },
    }),

    // ^ localStorage states configs
    {
      name: "storages",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        userDatas: state.userDatas,
        token: state.token,
      }),
    }
  )
);

export default useStates;
