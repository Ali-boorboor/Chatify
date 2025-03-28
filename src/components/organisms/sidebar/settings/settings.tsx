import ChangeBackground from "@/components/organisms/sidebar/settings/ChangeBackground";
import ChangePassword from "@/components/organisms/sidebar/settings/ChangePassword";
import ChangeUsername from "@/components/organisms/sidebar/settings/ChangeUsername";
import ChangeCover from "@/components/organisms/sidebar/settings/ChangeCover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@/components/ui/tabs";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { memo } from "react";

function settings() {
  return (
    <SheetContent side="right" className="sm:max-w-2xl overflow-y-auto">
      <SheetHeader className="pt-4 pb-0 px-4">
        <SheetTitle>Settings</SheetTitle>
      </SheetHeader>
      <SheetDescription className="px-4">User Settings</SheetDescription>
      <Tabs defaultValue="landing" className="w-full p-4">
        <TabsContent value="landing"></TabsContent>

        <ChangePassword />

        <ChangeUsername />

        <ChangeCover />

        <ChangeBackground />

        <TabsList className="mt-2 justify-center items-center flex-wrap gap-2 w-full h-full">
          <TabsTrigger value="changePassword" className="cursor-pointer h-10">
            Change Password
          </TabsTrigger>
          <TabsTrigger value="changeUsername" className="cursor-pointer h-10">
            Change Username
          </TabsTrigger>
          <TabsTrigger value="changeCover" className="cursor-pointer h-10">
            Change Cover
          </TabsTrigger>
          <TabsTrigger value="changeBackground" className="cursor-pointer h-10">
            Change Background
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </SheetContent>
  );
}

export default memo(settings);
