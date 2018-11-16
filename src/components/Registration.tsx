import React from "react";
import { Formik, Form, Field } from "formik";
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

const styles = createStyles({
  paper: {
    padding: "20px"
  },
  form: {
    maxWidth: "320px"
  }
});

interface IFormValues {
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
      <Formik<IFormValues>
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          isSubmitting
        }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              label="Имя"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              value={values.firstName}
              error={touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              name="lastName"
              label="Фамилия"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              value={values.lastName}
              error={touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              name="email"
              label="E-mail"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              value={values.email}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              name="password"
              type="password"
              label="Пароль"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              value={values.password}
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <SubmitButton isSubmitting={isSubmitting} isValid={isValid}>
              Зарегистрироваться
            </SubmitButton>
          </form>
        )}
      </Formik>
    </Paper>
  );
};

export default withStyles(styles)(Registration);
