import useStates from "@/hooks/useStates";
import { TabsContent } from "@/components/ui/tabs";
import { usePostReq } from "@/hooks/useRequests";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { memo, useEffect } from "react";
import { Form, Formik } from "formik";

function ForgotPassword() {
  const { setAuthSection } = useStates();
  const { mutate: PostReq, isSuccess } = usePostReq({
    successToastMsg: "New Password Sent To Your Email Successfully",
    errorToastMsg: "Operation Failed",
    url: "/auth/forgot-password",
  });

  useEffect(() => {
    if (isSuccess) setAuthSection("login");
  }, [isSuccess]);

  return (
    <Formik
      initialValues={{ identifier: "" }}
      onSubmit={(values, { resetForm }) => {
        PostReq({
          body: { identifier: values.identifier },
        });

        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <TabsContent value="forgotPassword">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-2xl font-bold">Forgot Password</h1>
              <Input
                type="text"
                name="identifier"
                onChange={handleChange}
                value={values.identifier}
                placeholder="Username or Email"
              />
              <Button variant="green" type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </TabsContent>
        </Form>
      )}
    </Formik>
  );
}

export default memo(ForgotPassword);
