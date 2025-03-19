import { DividerProps } from "@/types/atoms/types";
import { memo } from "react";

function Divider({ className }: DividerProps) {
  return (
    <div
      className={`w-full h-[1px] bg-foreground opacity-80 ${className}`}
    ></div>
  );
}

export default memo(Divider);
