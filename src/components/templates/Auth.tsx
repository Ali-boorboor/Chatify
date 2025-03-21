import useStates from "@/hooks/useStates";
import Login from "@/components/organisms/Auth/Login";
import MainAvatar from "@/components/atoms/MainAvatar";
import Signup from "@/components/organisms/Auth/Signup";
import VerifyEmail from "@/components/organisms/Auth/VerifyEmail";
import ForgotPassword from "@/components/organisms/Auth/ForgotPassword";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { memo } from "react";

function Auth() {
  const { authSection, setAuthSection, isValidateEmail } = useStates();

  return (
    <div className="flex justify-between h-screen overflow-hidden">
      <div className="basis-1/2 hidden md:block relative">
        <div className="bg-[url('/login-cover.jpg')] w-full h-full bg-cover bg-center"></div>
      </div>
      <div className="basis-full md:basis-1/2 h-full bg-accent p-4 flex items-center justify-center md:border-l md:border-chart-2">
        <Tabs
          defaultValue="login"
          value={authSection}
          className="max-w-xl w-full"
        >
          <MainAvatar
            imgSrc="/chatify-logos/chatify-logo.png"
            fallBackText="ch"
            className="w-20 md:w-30 h-20 md:h-30 mx-auto mb-4"
          />

          <Login />

          <Signup />

          <ForgotPassword />

          <VerifyEmail />

          <TabsList className="w-full mt-8">
            <TabsTrigger
              disabled={isValidateEmail}
              value="login"
              className="cursor-pointer mx-2"
              onClick={() => setAuthSection("login")}
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              disabled={isValidateEmail}
              value="signup"
              className="cursor-pointer mx-2"
              onClick={() => setAuthSection("signup")}
            >
              Signup
            </TabsTrigger>
            <TabsTrigger
              disabled={isValidateEmail}
              value="forgotPassword"
              className="cursor-pointer mx-2"
              onClick={() => setAuthSection("forgotPassword")}
            >
              Forgot Password
            </TabsTrigger>
            <TabsTrigger
              hidden={!isValidateEmail}
              disabled={!isValidateEmail}
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
