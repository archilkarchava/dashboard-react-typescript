import React from "react";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Paper,
  WithStyles,
  createStyles,
  withStyles,
  Typography
} from "@material-ui/core";
import SubmitButton from "../components/ui/SubmitButton";
import Field from "../components/ui/formik/MuiInputField";
import Layout from "../components/Layout";

const styles = createStyles({
  paper: {
    padding: "20px"
  },
  form: {
    maxWidth: "320px"
  },
  toRegistration: {
    marginTop: "16px"
  }
});

interface FormValues {
  email: string;
  password: string;
}

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail введён неверно.")
    .required("Введите E-mail."),
  password: Yup.string().required("Введите пароль.")
});

const LoginPage: React.FunctionComponent<WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return (
    <Layout title="Логин">
      <Paper className={classes.paper} elevation={6}>
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
          validationSchema={loginValidationSchema}
        >
          {({ isValid, isSubmitting }) => (
            <Form className={classes.form}>
              <Field name="email" label="E-mail" />
              <Field name="password" type="password" label="Пароль" />
              <SubmitButton isSubmitting={isSubmitting} isValid={isValid}>
                Войти
              </SubmitButton>
              <Typography
                className={classes.toRegistration}
                align="center"
                variant="body2"
              >
                Еще не зарегистрированы?{" "}
                <Link href="/register">
                  <a>Регистрация</a>
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Paper>
    </Layout>
  );
};

export default withStyles(styles)(LoginPage);
