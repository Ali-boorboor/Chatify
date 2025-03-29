import * as Yup from "yup";

const changeBackgroundValidations = Yup.object().shape({
  password: Yup.string().trim().required(),
});

export default changeBackgroundValidations;
