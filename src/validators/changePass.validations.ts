import * as Yup from "yup";

const changePassValidations = Yup.object().shape({
  currentPassword: Yup.string().trim().required(),
  newPassword: Yup.string().trim().required(),
  submitNewPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("newPassword")], "Passwords Are Not The Same")
    .required(),
});

export default changePassValidations;
