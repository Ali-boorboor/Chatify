import useStates from "@/hooks/useStates";
import { TabsContent } from "@/components/ui/tabs";
import { usePutReq } from "@/hooks/useRequests";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { memo, useEffect } from "react";
import { Form, Formik } from "formik";

function ChangeUsername() {
  const { token, setUsername } = useStates();
  const {
    mutate: PutReq,
    data,
    isSuccess,
  } = usePutReq({
    successToastMsg: "Username Changed Successfully",
    errorToastMsg: "Failed To Change Username",
    url: "/user/change-username",
  });

  useEffect(() => {
    if (isSuccess) setUsername(data?.data?.data?.username);
  }, [isSuccess]);

  return (
    <Formik
      initialValues={{
        newUsername: "",
        password: "",
      }}
      onSubmit={(values, { resetForm }) => {
        PutReq({
          body: {
            newUsername: values.newUsername,
            password: values.password,
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
      {({ values, handleChange }) => (
        <Form>
          <TabsContent value="changeUsername">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold">Change Username</h1>
              <Input
                type="text"
                name="newUsername"
                onChange={handleChange}
                value={values.newUsername}
                placeholder="New Username"
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
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

export default memo(ChangeUsername);
