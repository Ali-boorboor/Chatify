import {
  DrawerClose,
  DrawerTitle,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerDescription,
} from "@/components/ui/drawer";
import { memo } from "react";

function UserDataDrawer() {
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>
          This action cannot be undone ! chert mige baba 😂
        </DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        Test
        <DrawerClose>X</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
}

export default memo(UserDataDrawer);
