import useStates from "@/hooks/useStates";
import { TabsContent } from "@/components/ui/tabs";
import { usePutReq } from "@/hooks/useRequests";
import { Button } from "@/components/ui/button";
import { memo, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { GrFormUpload } from "react-icons/gr";
import { Label } from "@/components/ui/label";
import { TiTick } from "react-icons/ti";
import { Form, Formik } from "formik";

function ChangeBackground() {
  const { token, setBackground } = useStates();
  const fileInputRef = useRef(null);
  const {
    mutate: PutReq,
    data,
    isSuccess,
  } = usePutReq({
    successToastMsg: "Background Changed Successfully",
    errorToastMsg: "Failed To Change Background",
    url: "/user/change-background",
  });

  useEffect(() => {
    if (isSuccess) setBackground(data?.data?.data?.background);
  }, [isSuccess]);

  return (
    <Formik
      initialValues={{
        password: "",
        background: "",
      }}
      onSubmit={(values, { resetForm }) => {
        const formData = new FormData();

        formData.append("password", values.password);
        formData.append("background", values.background);

        PutReq({
          body: formData,
          config: {
            headers: {
              Authorization: token,
            },
          },
        });

        resetForm();
      }}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form>
          <TabsContent value="changeBackground">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold">Change Background</h1>
              <Label htmlFor="background" className="cursor-pointer">
                <p className="bg-chart-2 text-foreground pl-1 pr-3 py-1 rounded-md flex items-center gap-1">
                  {values.background ? (
                    <>
                      <TiTick className="w-7 h-7" />
                      <span className="font-bold text-nowrap">Uploaded</span>
                    </>
                  ) : (
                    <>
                      <GrFormUpload className="w-7 h-7" />
                      <span className="font-bold text-nowrap">
                        Upload Background
                      </span>
                    </>
                  )}
                </p>
                <Input
                  hidden
                  id="background"
                  type="file"
                  name="background"
                  ref={fileInputRef}
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(e: any) => {
                    setFieldValue("background", e.target?.files[0]);
                  }}
                />
              </Label>
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

export default memo(ChangeBackground);
