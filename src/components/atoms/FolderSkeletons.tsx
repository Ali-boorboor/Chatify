import { Skeleton } from "@/components/ui/skeleton";
import { memo } from "react";

function FolderSkeletons() {
  return <Skeleton className="w-12 h-8 rounded-md" />;
}

export default memo(FolderSkeletons);
