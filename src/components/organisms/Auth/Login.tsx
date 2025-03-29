import useStates from "@/hooks/useStates";
import loginValidations from "@/validators/login.validations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePostReq } from "@/hooks/useRequests";
import { TabsContent } from "@/components/ui/tabs";
import { Form, Formik } from "formik";
import { memo, useEffect } from "react";

function Login() {
  const {
    setUserID,
    setCover,
    setUsername,
    setIdentifier,
    setToken,
    setBackground,
  } = useStates();
  const {
    mutate: PostReq,
    isSuccess,
    data,
  } = usePostReq({
    successToastMsg: "Logged In Successfully",
    errorToastMsg: "Login Failed",
    url: "/auth/login",
    navigateTo: "/",
  });

  useEffect(() => {
    if (isSuccess) {
      setToken(`Bearer ${data?.data?.data?.token}`);
      setCover(data?.data?.data?.userInfo?.cover);
      setBackground(data?.data?.data?.userInfo?.background);
      setUserID(data?.data?.data?.userInfo?.userID);
      setUsername(data?.data?.data?.userInfo?.username);
      setIdentifier(data?.data?.data?.userInfo?.identifier);
    }
  }, [isSuccess]);

  return (
    <Formik
      validateOnBlur
      validationSchema={loginValidations}
      initialValues={{ identifier: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        PostReq({
          body: { identifier: values.identifier, password: values.password },
        });

        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TabsContent value="login">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <Input
                type="text"
                name="identifier"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.identifier}
                placeholder="Username or Email"
              />
              <Input
                type="password"
                name="password"
                onBlur={handleBlur}
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <Button variant="green" type="submit" className="w-full">
                Login
              </Button>
            </div>
          </TabsContent>
        </Form>
      )}
    </Formik>
  );
}

export default memo(Login);
