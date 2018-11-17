import React from "react";
import {
  FormikHandlers,
  FormikValues,
  FormikErrors,
  FormikTouched
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

const InputField = (props: InputFieldProps & TextFieldProps) => {
  const {
    field,
    form,
    margin,
    variant,
    fullWidth,
    helperText,
    ...restMuiProps
  } = props;
  return (
    <TextField
      {...field}
      margin={"normal" || props.margin}
      variant={"outlined" || props.variant}
      error={
        form.touched &&
        form.touched[field.name] &&
        form.errors &&
        !!form.errors[field.name]
      }
      fullWidth={true || props.fullWidth}
      helperText={
        form.touched &&
        form.touched[field.name] &&
        form.errors &&
        form.errors[field.name]
      }
      {...restMuiProps}
    >
      {props.children}
    </TextField>
  );
};

export default InputField;
