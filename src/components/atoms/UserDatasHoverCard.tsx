import MainAvatar from "@/components/atoms/MainAvatar";
import { HoverCardContent } from "@/components/ui/hover-card";
import { UserDatasHoverCardProps } from "@/types/atoms/types";
import { memo } from "react";

function UserDatasHoverCard({
  imgSrc,
  fallBackText,
  username,
  identifier,
}: UserDatasHoverCardProps) {
  return (
    <HoverCardContent>
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col items-center gap-2">
          <MainAvatar imgSrc={imgSrc} fallBackText={fallBackText} />
          <p className="text-lg font-semibold uppercase">{username}</p>
          <p className="font-bold italic text-gray-400">{identifier}</p>
        </div>
      </div>
    </HoverCardContent>
  );
}

export default memo(UserDatasHoverCard);
