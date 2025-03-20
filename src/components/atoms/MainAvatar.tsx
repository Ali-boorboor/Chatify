import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MainAvatarProps } from "@/types/molecules/types";
import { memo } from "react";

function MainAvatar({ imgSrc, fallBackText, className }: MainAvatarProps) {
  return (
    <Avatar
      className={`w-10 md:w-13 h-10 md:h-13 ring-2 ring-foreground drop-shadow-lg ${className}`}
    >
      <AvatarImage
        className="object-cover object-center"
        src={imgSrc}
        alt="avatar"
      />
      <AvatarFallback className="uppercase font-bold">
        {fallBackText}
      </AvatarFallback>
    </Avatar>
  );
}

export default memo(MainAvatar);
