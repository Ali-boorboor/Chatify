import * as Yup from "yup";

const addFolderValidations = Yup.object().shape({
  folderName: Yup.string().trim().min(3).max(20).required(),
});

export default addFolderValidations;
