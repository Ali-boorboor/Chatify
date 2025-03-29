import * as Yup from "yup";

const changeCoverValidations = Yup.object().shape({
  password: Yup.string().trim().required(),
});

export default changeCoverValidations;
