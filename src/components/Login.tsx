import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  Paper,
  WithStyles,
  createStyles,
  withStyles,
  TextField,
  Typography
} from "@material-ui/core";
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
  email: string;
  password: string;
}

const Login = (props: WithStyles<typeof styles>) => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">Вход</Typography>
      <Formik<FormValues>
        initialValues={{
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
          email: Yup.string()
            .email("E-mail введён неверно.")
            .required("Введите E-mail."),
          password: Yup.string().required("Введите пароль.")
        })}
      >
        {({ isValid, isSubmitting }) => (
          <Form className={classes.form}>
            <Field name="email" label="E-mail" component={InputField} />
            <Field
              name="password"
              type="password"
              label="Пароль"
              component={InputField}
            />
            <SubmitButton isSubmitting={isSubmitting} isValid={isValid}>
              Войти
            </SubmitButton>
            <Typography
              className={classes.typography}
              align="center"
              variant="body2"
            >
              Еще не зарегистрированы? <Link to="/register">Регистрация</Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default withStyles(styles)(Login);
