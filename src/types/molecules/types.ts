export type ChatItemProps = {
  imgSrc?: string;
  chatTitle: string;
  fallBackText: string;
  lastChatText?: string;
  wrapperClassname?: string;
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
