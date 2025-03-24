import useStates from "@/hooks/useStates";
import { Form, Formik } from "formik";
import { TiTick } from "react-icons/ti";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrFormUpload } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { usePostReq } from "@/hooks/useRequests";
import { TabsContent } from "@/components/ui/tabs";
import { memo, useEffect, useRef } from "react";

function Signup() {
  const fileInputRef = useRef(null);
  const { setAuthSection, setIsValidateEmail } = useStates();
  const { mutate: PostReq, isSuccess } = usePostReq({
    successToastMsg: "Signed Up Successfully",
    errorToastMsg: "Signup Failed",
    url: "/auth/signup",
  });

  useEffect(() => {
    if (isSuccess) {
      setIsValidateEmail(true);
      setAuthSection("verifyEmail");
    }
  }, [isSuccess]);

  return (
    <Formik
      initialValues={{
        file: "",
        email: "",
        username: "",
        password: "",
        submitPassword: "",
      }}
      onSubmit={(values, { resetForm }) => {
        const formData = new FormData();

        formData.append("cover", values.file);
        formData.append("email", values.email);
        formData.append("username", values.username);
        formData.append("password", values.password);

        PostReq({ body: formData });

        resetForm();
      }}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form>
          <TabsContent value="signup">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-2xl font-bold">Welcome</h1>
              <div className="flex items-center gap-4 w-full">
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                />
                <Label htmlFor="file" className="cursor-pointer">
                  <p className="bg-chart-2 text-foreground pl-1 pr-3 py-1 rounded-md flex items-center gap-1">
                    {values.file ? (
                      <>
                        <TiTick className="w-7 h-7" />
                        <span className="font-bold text-nowrap">Uploaded</span>
                      </>
                    ) : (
                      <>
                        <GrFormUpload className="w-7 h-7" />
                        <span className="font-bold text-nowrap">
                          Upload Cover
                        </span>
                      </>
                    )}
                  </p>
                  <Input
                    hidden
                    id="file"
                    type="file"
                    name="file"
                    ref={fileInputRef}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e: any) => {
                      setFieldValue("file", e.target?.files[0]);
                    }}
                  />
                </Label>
              </div>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="submitPassword"
                placeholder="Submit Password"
                value={values.submitPassword}
                onChange={handleChange}
              />
              <Button variant="green" type="submit" className="w-full">
                Signup
              </Button>
            </div>
          </TabsContent>
        </Form>
      )}
    </Formik>
  );
}

export default memo(Signup);
