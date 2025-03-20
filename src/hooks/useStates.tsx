import { create } from "zustand";
import { StoreState } from "@/types/states/types";
import { createJSONStorage, persist } from "zustand/middleware";

const useStates = create<StoreState>()(
  persist(
    (set) => ({
      // * user datas state (will store in localStorage too)
      userDatas: {
        userID: "",
        username: "",
        identifier: "",
      },

      setUserID: (userID) => {
        return set((state) => ({
          userDatas: { ...state.userDatas, userID },
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

      // * type new message input state
      messages: [],

      setMessages: (messages) => set({ messages }),
      addMessage: (newMessage) => {
        return set((state) => ({ messages: [...state.messages, newMessage] }));
      },

      // * type new message input state
      message: "",

      setMessage: (message) => set({ message }),

      // * chat id state that user is in it
      chatID: "",

      setChatID: (chatID) => set({ chatID }),
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
