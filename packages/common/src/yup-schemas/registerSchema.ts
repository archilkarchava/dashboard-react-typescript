import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("Введите имя."),
  lastName: yup.string().required("Введите фамилию."),
  email: yup
    .string()
    .email("E-mail введён неверно.")
    .required("Введите E-mail."),
  password: yup
    .string()
    .min(8, "Пароль должен содержать минимум 8 символов.")
    .required("Введите пароль.")
});
