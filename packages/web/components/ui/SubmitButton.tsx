import React from "react";
import classNames from "classnames";
import { Button, CircularProgress } from "@material-ui/core";
import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { ButtonProps } from "@material-ui/core/Button";

const styles = createStyles({
  button: {
    marginTop: "16px",
    height: "56px"
  },
  buttonProgress: {
    margin: "auto",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute"
  }
});

interface SubmitButtonProps extends WithStyles<typeof styles> {
  type?: "submit";
  isSubmitting: boolean;
  isValid: boolean;
}

const SubmitButton: React.FunctionComponent<
  SubmitButtonProps & ButtonProps
> = ({
  children,
  color = "primary",
  variant = "contained",
  fullWidth = true,
  type,
  isValid,
  isSubmitting,
  classes,
  className,
  innerRef,
  ...buttonProps
}) => {
  return (
    <Button
      className={classNames(classes.button, className)}
      type="submit"
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      disabled={!isValid || isSubmitting}
      {...buttonProps}
    >
      {children}
      {isSubmitting && (
        <CircularProgress
          className={classes.buttonProgress}
          size={40}
          color="secondary"
        />
      )}
    </Button>
  );
};

export default withStyles(styles)(SubmitButton);
