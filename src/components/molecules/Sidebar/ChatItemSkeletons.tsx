import Divider from "@/components/atoms/Divider";
import { Skeleton } from "@/components/ui/skeleton";
import { memo } from "react";

function ChatItemSkeletons() {
  return (
    <>
      <div className="flex items-center gap-3 px-3 py-2">
        <Skeleton className="w-10 md:w-13 h-10 md:h-13 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-52" />
        </div>
      </div>
      <Divider />
      <div className="flex items-center gap-3 px-3 py-2">
        <Skeleton className="w-10 md:w-13 h-10 md:h-13 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-52" />
        </div>
      </div>
      <Divider />
      <div className="flex items-center gap-3 px-3 py-2">
        <Skeleton className="w-10 md:w-13 h-10 md:h-13 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-52" />
        </div>
      </div>
      <Divider />
    </>
  );
}

export default memo(ChatItemSkeletons);
