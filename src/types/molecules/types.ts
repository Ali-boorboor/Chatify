export type ChatItemProps = {
  imgSrc?: string;
  fallBackText: string;
  chatTitle: string;
  lastChatText?: string;
  wrapperClassname?: string;
};

export type MainAvatarProps = {
  imgSrc?: string;
  fallBackText: string;
  className?: string;
};

export type ChatBubbleProps = {
  isThisUserMessage: boolean;
  imgSrc?: string;
  fallBackText: string;
  message: string;
};
