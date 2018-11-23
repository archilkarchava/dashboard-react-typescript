import * as yup from "yup"

export const loginSchema = yup.object().shape({
  email: yup.string()
    .email("E-mail введён неверно.")
    .required("Введите E-mail."),
  password: yup.string().required("Введите пароль.")
});