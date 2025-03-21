import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { memo } from "react";

function VerifyEmail() {
  return (
    <TabsContent value="verifyEmail">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold">Verify Email</h1>
        <p className="font-bold italic text-gray-400">
          Enter The Code That Was Send To Your Email
        </p>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button variant="green" type="submit" className="w-56">
          Submit
        </Button>
      </div>
    </TabsContent>
  );
}

export default memo(VerifyEmail);
