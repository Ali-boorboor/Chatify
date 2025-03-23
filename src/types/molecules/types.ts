export type ChatItemProps = {
  chatID: string;
  imgSrc?: string;
  chatTitle: string;
  fallBackText: string;
};

export type ChatItemsListProps = {
  chats: [{ _id: string; cover?: string; title: string }];
};

export type MainAvatarProps = {
  imgSrc?: string;
  className?: string;
  fallBackText: string;
};

export type ChatBubbleProps = {
  imgSrc?: string;
  message: string;
  fallBackText: string;
  isThisUserMessage: boolean;
};
