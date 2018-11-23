import React from "react";
import Head from "next/head";
import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles";

const styles = createStyles({
  wrapper: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bddbf3"
  }
});

interface Props extends WithStyles<typeof styles> {
  title: string;
}

const Layout: React.FunctionComponent<Props> = props => {
  const { classes, children, title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes.wrapper}>{children}</div>
    </>
  );
};

export default withStyles(styles)(Layout);
