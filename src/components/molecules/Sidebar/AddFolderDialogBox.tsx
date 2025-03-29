import useStates from "@/hooks/useStates";
import FolderSelectBox from "@/components/atoms/FolderSelectBox";
import addFolderValidations from "@/validators/addFolder.validations";
import { usePostReq } from "@/hooks/useRequests";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, Formik } from "formik";
import { toast } from "sonner";
import { memo } from "react";

function AddFolderDialogBox() {
  const {
    setIsAddFolderModalOpen,
    selectedFolderChatValues,
    setSelectedFolderChatValues,
    token,
  } = useStates();
  const { mutate: PostReq } = usePostReq({
    successToastMsg: "Folder Created Successfully",
    errorToastMsg: "Failed To Create Folder",
    refetchQueryKey: ["FOLDERS"],
    url: "/folder/create",
  });

  return (
    <DialogContent className="max-w-md w-full">
      <Formik
        validateOnBlur
        validationSchema={addFolderValidations}
        initialValues={{ folderName: "" }}
        onSubmit={(values, { resetForm }) => {
          if (selectedFolderChatValues.length >= 1) {
            PostReq({
              body: {
                title: values.folderName,
                chats: selectedFolderChatValues?.map((item) => item.id),
              },
              config: {
                headers: { Authorization: token },
              },
            });

            setIsAddFolderModalOpen(false);
            setSelectedFolderChatValues([]);
            resetForm({});
          } else {
            toast.warning("You Must At Least Select One Chat To Add A Folder");
          }
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <DialogHeader>
              <DialogTitle>Add Folder</DialogTitle>
              <DialogDescription>
                Add folder to manage chats better.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col justify-center items-start gap-4">
                <Label htmlFor="folderName" className="text-right text-nowrap">
                  Folder Name
                </Label>
                <Input
                  id="folderName"
                  name="folderName"
                  className="col-span-3"
                  placeholder="Folder Name"
                  value={values.folderName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-4">
                <Label htmlFor="chats" className="text-right text-nowrap">
                  Chats
                </Label>
                <FolderSelectBox />
              </div>
            </div>
            <DialogFooter>
              <Button variant="green" type="submit" className="grow">
                Add Folder
              </Button>
            </DialogFooter>
          </Form>
        )}
      </Formik>
    </DialogContent>
  );
}

export default memo(AddFolderDialogBox);
