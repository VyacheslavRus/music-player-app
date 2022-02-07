import * as yup from "yup";

let schema = yup.object().shape({
  email: yup.string().email().required("Почта обязательное поле"),
  username: yup.string(),
  password: yup
    .string()
    .required("Введите корректный пароль")
    .min(6, "Минимум 6 символов")
    .max(12, "Максимум 12 символов"),
});

export default schema;
