export type ChatItemProps = {
  chatID: string;
  imgSrc?: string;
  chatTitle: string;
  fallBackText: string;
  lastChatText?: string;
  notifCounts?: string | number;
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
