import React from "react";
import {
  FormikHandlers,
  FormikValues,
  FormikErrors,
  FormikTouched,
  Field
} from "formik";
import { TextField } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField";

interface InputFieldProps {
  field: {
    name: string;
    onChange: FormikHandlers["handleChange"];
    onBlur: FormikHandlers["handleBlur"];
    value: string;
  };
  form: {
    errors?: FormikErrors<FormikValues>;
    touched?: FormikTouched<FormikValues>;
  };
}

const InputField: React.FunctionComponent<InputFieldProps & TextFieldProps> = ({
  children,
  field,
  form,
  margin = "normal",
  variant = "outlined" as any,
  fullWidth = true,
  helperText,
  ...restMuiProps
}) => {
  return (
    <TextField
      {...field}
      margin={margin}
      variant={variant}
      fullWidth={fullWidth}
      error={
        form.touched &&
        form.touched[field.name] &&
        form.errors &&
        !!form.errors[field.name]
      }
      helperText={
        form.touched &&
        form.touched[field.name] &&
        form.errors &&
        form.errors[field.name]
      }
      {...restMuiProps}
    >
      {children}
    </TextField>
  );
};

const FormikInputField: React.FunctionComponent<TextFieldProps> = props => {
  return <Field {...props} component={InputField} />;
};

export default FormikInputField;
