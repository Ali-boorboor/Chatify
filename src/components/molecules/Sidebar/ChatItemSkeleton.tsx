import Divider from "@/components/atoms/Divider";
import { Skeleton } from "@/components/ui/skeleton";
import { memo } from "react";

function ChatItemSkeleton() {
  return (
    <>
      <Divider />
      <div className="flex items-center gap-3 px-3 py-2">
        <Skeleton className="h-13 w-13 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-52" />
        </div>
      </div>
      <Divider />
    </>
  );
}

export default memo(ChatItemSkeleton);
