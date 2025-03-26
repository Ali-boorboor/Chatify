export type ChatItemProps = {
  chatID: string;
  imgSrc?: string;
  chatTitle: string;
  fallBackText: string;
  identifier: string;
  description?: string;
};

export type ChatItemsListProps = {
  chats: [
    {
      _id: string;
      cover?: string;
      title: string;
      identifier: string;
      description?: string;
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
};

export type ChatInputFormValues = {
  message: string;
};
