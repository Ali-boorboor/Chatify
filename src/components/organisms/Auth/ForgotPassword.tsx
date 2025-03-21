import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { memo } from "react";

function ForgotPassword() {
  return (
    <TabsContent value="forgotPassword">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <Input type="text" placeholder="Username or Email" />
        <Button variant="green" type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </TabsContent>
  );
}

export default memo(ForgotPassword);
