import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Paper,
  Typography,
  createStyles,
  WithStyles
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SubmitButton from "./ui/SubmitButton";
import { Link } from "react-router-dom";
import InputField from "./ui/InputField";

const styles = createStyles({
  paper: {
    padding: "20px"
  },
  form: {
    maxWidth: "320px"
  },
  typography: {
    marginTop: "16px"
  }
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Registration = (props: WithStyles<typeof styles>) => {
  const { classes } = props;
  return (
    <Paper className={classes.paper} elevation={6}>
      <Typography variant="h6">Регистрация</Typography>
      <Formik<FormValues>
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
          }, 2000);
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("Введите имя."),
          lastName: Yup.string().required("Введите фамилию."),
          email: Yup.string()
            .email("E-mail введён неверно.")
            .required("Введите E-mail."),
          password: Yup.string()
            .min(8, "Пароль должен содержать минимум 8 символов.")
            .required("Введите пароль.")
        })}
      >
        {({ isValid, isSubmitting }) => (
          <Form className={classes.form}>
            <Field name="firstName" label="Имя" component={InputField} />
            <Field name="lastName" label="Фамилия" component={InputField} />
            <Field name="email" label="E-mail" component={InputField} />
            <Field
              name="password"
              type="password"
              label="Пароль"
              component={InputField}
            />
            <SubmitButton isSubmitting={isSubmitting} isValid={isValid}>
              Зарегистрироваться
            </SubmitButton>
            <Typography
              className={classes.typography}
              align="center"
              variant="body2"
            >
              Уже зарегистрированы? <Link to="/login">Вход</Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default withStyles(styles)(Registration);
