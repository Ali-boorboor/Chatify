import useStates from "@/hooks/useStates";
import changePassValidations from "@/validators/changePass.validations";
import { TabsContent } from "@/components/ui/tabs";
import { usePutReq } from "@/hooks/useRequests";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, Formik } from "formik";
import { memo } from "react";

function ChangePassword() {
  const { token } = useStates();
  const { mutate: PutReq } = usePutReq({
    successToastMsg: "Password Changed Successfully",
    errorToastMsg: "Failed To Change Password",
    url: "/user/change-password",
  });

  return (
    <Formik
      validateOnBlur
      validationSchema={changePassValidations}
      initialValues={{
        currentPassword: "",
        newPassword: "",
        submitNewPassword: "",
      }}
      onSubmit={(values, { resetForm }) => {
        PutReq({
          body: {
            currentPassword: values.currentPassword,
            newPassword: values.newPassword,
          },
          config: {
            headers: {
              Authorization: token,
            },
          },
        });

        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TabsContent value="changePassword">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold">Change Password</h1>
              <Input
                type="password"
                name="currentPassword"
                onChange={handleChange}
                value={values.currentPassword}
                placeholder="Current Password"
                onBlur={handleBlur}
              />
              <Input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Input
                type="password"
                name="submitNewPassword"
                placeholder="Submit New Password"
                value={values.submitNewPassword}
                onChange={handleChange}
                onBlur={handleBlur}
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

export default memo(ChangePassword);
