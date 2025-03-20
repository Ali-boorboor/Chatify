import MainAvatar from "@/components/atoms/MainAvatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrFormUpload } from "react-icons/gr";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { memo } from "react";

function Auth() {
  return (
    <div className="flex justify-between h-screen overflow-hidden">
      <div className="basis-1/2 hidden md:block relative">
        <div className="bg-[url('/login-cover.jpg')] w-full h-full bg-cover bg-center"></div>
      </div>
      <div className="basis-full md:basis-1/2 h-full bg-accent p-4 flex items-center justify-center md:border-l md:border-chart-2">
        <Tabs defaultValue="login" className="max-w-xl w-full">
          <MainAvatar
            imgSrc="/chatify-logos/chatify-logo.png"
            fallBackText="ch"
            className="w-20 md:w-30 h-20 md:h-30 mx-auto mb-4"
          />

          <TabsContent value="login">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <Input type="text" placeholder="Username or Email" />
              <Input type="password" placeholder="Password" />
              <Button variant="green" type="submit" className="w-full">
                Login
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="signup">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-2xl font-bold">Welcome</h1>
              <div className="flex items-center gap-4 w-full">
                <Input type="text" placeholder="Username" />
                <Label htmlFor="file" className="cursor-pointer">
                  <p className="bg-chart-2 text-foreground pl-1 pr-3 py-1 rounded-md flex items-center gap-1">
                    <GrFormUpload className="w-7 h-7" />
                    <span className="font-bold text-nowrap">Upload Cover</span>
                  </p>
                  <Input type="file" id="file" hidden />
                </Label>
              </div>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button variant="green" type="submit" className="w-full">
                Signup
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="forgotPassword">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-2xl font-bold">Forgot Password</h1>
              <Input type="text" placeholder="Username or Email" />
              <Button variant="green" type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </TabsContent>

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

          <TabsList className="w-full mt-8">
            <TabsTrigger
              disabled={false}
              value="login"
              className="cursor-pointer mx-2"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              disabled={false}
              value="signup"
              className="cursor-pointer mx-2"
            >
              Signup
            </TabsTrigger>
            <TabsTrigger
              disabled={false}
              value="forgotPassword"
              className="cursor-pointer mx-2"
            >
              Forgot Password
            </TabsTrigger>
            <TabsTrigger
              hidden={false}
              disabled={false}
              value="verifyEmail"
              className="cursor-pointer mx-2"
            >
              Verify Email
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}

export default memo(Auth);
