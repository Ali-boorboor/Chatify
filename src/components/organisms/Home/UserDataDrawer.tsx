import MainAvatar from "@/components/atoms/MainAvatar";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { memo } from "react";

function UserDataDrawer() {
  return (
    <SheetContent
      className="flex justify-center items-center text-center"
      side="bottom"
    >
      <SheetHeader>
        <SheetTitle className="flex flex-col gap-2">
          <MainAvatar
            imgSrc="https://github.com/shadcn.png"
            fallBackText="sb"
            className="mx-auto w-16 md:w-20 h-16 md:h-20 text-xl"
          />
          <p className="text-xl md:text-3xl font-semibold uppercase">
            sarabayat
          </p>
        </SheetTitle>
      </SheetHeader>
      <SheetDescription className="text-lg md:text-xl font-normal capitalize">
        user biography description
      </SheetDescription>
      <SheetFooter className="text-xl font-bold italic text-gray-400">
        @sara-bayatam
      </SheetFooter>
    </SheetContent>
  );
}

export default memo(UserDataDrawer);
