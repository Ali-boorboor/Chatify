import MainAvatar from "@/components/atoms/MainAvatar";
import { UserDataDrawerProps } from "@/types/organisms/types";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { memo } from "react";

function UserDataDrawer({
  title,
  description,
  identifier,
  cover = undefined,
}: UserDataDrawerProps) {
  return (
    <SheetContent
      className="flex justify-center items-center text-center"
      side="bottom"
    >
      <SheetHeader>
        <SheetTitle className="flex flex-col gap-2">
          <MainAvatar
            imgSrc={cover}
            fallBackText={title?.slice(0, 2)}
            className="mx-auto w-16 md:w-20 h-16 md:h-20 text-xl"
          />
          <p className="text-xl md:text-3xl font-semibold uppercase">{title}</p>
        </SheetTitle>
      </SheetHeader>
      <SheetDescription className="text-lg md:text-xl font-normal capitalize w-44 md:w-48 overflow-hidden text-ellipsis whitespace-nowrap">
        {description}
      </SheetDescription>
      <SheetFooter className="text-xl font-bold italic text-gray-400">
        {identifier}
      </SheetFooter>
    </SheetContent>
  );
}

export default memo(UserDataDrawer);
