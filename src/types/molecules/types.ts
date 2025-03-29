export type ChatItemProps = {
  chatID: string;
  imgSrc?: string;
  chatTitle: string;
  fallBackText: string;
  identifier: string;
  description?: string;
  lastMessage?: string;
};

export type ChatItemsListProps = {
  chats: [
    {
      _id: string;
      cover?: string;
      title: string;
      identifier: string;
      description?: string;
      isPV?: boolean;
      messages?: [
        {
          message: string;
        }
      ];
      pvAccessUsers?: {
        _id: string;
        username: string;
        cover: string;
        identifier: string;
        description?: string;
      }[];
    }
  ];
};

export type MainAvatarProps = {
  imgSrc?: string;
  className?: string;
  fallBackText: string;
};

export type ChatBubbleProps = {
  imgSrc?: string;
  message?: string;
  media?: string;
  fallBackText: string;
  isThisUserMessage: boolean;
  username: string;
  identifier: string;
  description?: string;
  createdAt: Date;
  deleteMessageHandler?: () => void;
};

export type ChatInputFormValues = {
  message: string;
};
