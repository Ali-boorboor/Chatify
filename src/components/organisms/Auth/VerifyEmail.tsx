import useStates from "@/hooks/useStates";
import { Button } from "@/components/ui/button";
import { usePostReq } from "@/hooks/useRequests";
import { TabsContent } from "@/components/ui/tabs";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { memo, useEffect } from "react";
import { Form, Formik } from "formik";

function VerifyEmail() {
  const { setAuthSection, setIsValidateEmail } = useStates();
  const { mutate: PostReq, isSuccess } = usePostReq({
    successToastMsg: "Code Verified Successfully",
    errorToastMsg: "Verify Code Failed",
    url: "/auth/verify-code",
  });

  useEffect(() => {
    if (isSuccess) {
      setIsValidateEmail(false);
      setAuthSection("login");
    }
  }, [isSuccess]);

  return (
    <Formik
      initialValues={{ code: "" }}
      onSubmit={(values, { resetForm }) => {
        PostReq({ body: { code: values.code } });
        resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <TabsContent value="verifyEmail">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-2xl font-bold">Verify Email</h1>
              <p className="font-bold italic text-gray-400">
                Enter The Code That Was Send To Your Email (Migth be in spams)
              </p>
              <InputOTP
                name="code"
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                onChange={(value) => setFieldValue("code", value)}
                value={values.code}
              >
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
        </Form>
      )}
    </Formik>
  );
}

export default memo(VerifyEmail);
