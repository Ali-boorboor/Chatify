import { memo } from "react";
import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <Loader2 className="text-chart-2 animate-spin w-20 h-20 absolute" />
    </div>
  );
}

export default memo(Loading);
