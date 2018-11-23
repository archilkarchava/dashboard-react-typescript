import React from "react";
import Link from "next/link";
import { Formik, Form } from "formik";
import { registerSchema } from "@dashboard-react-ts/common";
import { Paper, Typography, createStyles, WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
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
  toLogin: {
    marginTop: "16px"
  }
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegistrationPage: React.FunctionComponent<
  WithStyles<typeof styles>
> = props => {
  const { classes } = props;
  return (
    <Layout title="Регистрация">
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
          validationSchema={registerSchema}
        >
          {({ isValid, isSubmitting }) => (
            <Form className={classes.form}>
              <Field name="firstName" label="Имя" />
              <Field name="lastName" label="Фамилия" />
              <Field name="email" label="E-mail" />
              <Field name="password" type="password" label="Пароль" />
              <SubmitButton isSubmitting={isSubmitting} isValid={isValid}>
                Зарегистрироваться
              </SubmitButton>
              <Typography
                className={classes.toLogin}
                align="center"
                variant="body2"
              >
                Уже зарегистрированы?{" "}
                <Link href="/login">
                  <a>Вход</a>
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Paper>
    </Layout>
  );
};

export default withStyles(styles)(RegistrationPage);
