import useStates from "@/hooks/useStates";
import changeCoverValidations from "@/validators/changeCover.validations";
import { TabsContent } from "@/components/ui/tabs";
import { usePutReq } from "@/hooks/useRequests";
import { Button } from "@/components/ui/button";
import { memo, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { GrFormUpload } from "react-icons/gr";
import { Label } from "@/components/ui/label";
import { TiTick } from "react-icons/ti";
import { Form, Formik } from "formik";

function ChangeCover() {
  const { token, setCover } = useStates();
  const fileInputRef = useRef(null);
  const {
    mutate: PutReq,
    data,
    isSuccess,
  } = usePutReq({
    successToastMsg: "Cover Changed Successfully",
    errorToastMsg: "Failed To Change Cover",
    url: "/user/change-cover",
  });

  useEffect(() => {
    if (isSuccess) setCover(data?.data?.data?.cover);
  }, [isSuccess]);

  return (
    <Formik
      validateOnBlur
      validationSchema={changeCoverValidations}
      initialValues={{
        password: "",
        cover: "",
      }}
      onSubmit={(values, { resetForm }) => {
        const formData = new FormData();

        formData.append("cover", values.cover);
        formData.append("password", values.password);

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
      {({ values, handleChange, handleBlur, setFieldValue }) => (
        <Form>
          <TabsContent value="changeCover">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold">Change Cover</h1>
              <Label htmlFor="cover" className="cursor-pointer">
                <p className="bg-chart-2 text-foreground pl-1 pr-3 py-1 rounded-md flex items-center gap-1">
                  {values.cover ? (
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
                  id="cover"
                  type="file"
                  name="cover"
                  ref={fileInputRef}
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(e: any) => {
                    setFieldValue("cover", e.target?.files[0]);
                  }}
                />
              </Label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
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

export default memo(ChangeCover);
