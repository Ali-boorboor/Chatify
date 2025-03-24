import useStates from "@/hooks/useStates";
import FolderSelectBox from "@/components/atoms/FolderSelectBox";
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
        initialValues={{ folderName: "" }}
        onSubmit={(values, { resetForm }) => {
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
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <DialogHeader>
              <DialogTitle>Add Folder</DialogTitle>
              <DialogDescription>
                Add folder to manage chats better.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="folderName" className="text-right">
                  Folder Name
                </Label>
                <Input
                  id="folderName"
                  name="folderName"
                  className="col-span-3"
                  placeholder="Folder Name"
                  value={values.folderName}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="chats" className="text-right">
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
