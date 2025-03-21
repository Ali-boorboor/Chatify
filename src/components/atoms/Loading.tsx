import { memo } from "react";
import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="flex justify-center items-center w-screen h-screen fixed inset-0 bg-accent">
      <Loader2 className="text-chart-2 animate-spin w-20 h-20" />
    </div>
  );
}

export default memo(Loading);
