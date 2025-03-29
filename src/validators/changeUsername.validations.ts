import * as Yup from "yup";

const changeUsernameValidations = Yup.object().shape({
  newUsername: Yup.string().trim().min(3).max(20).required(),
  password: Yup.string().trim().required(),
});

export default changeUsernameValidations;
