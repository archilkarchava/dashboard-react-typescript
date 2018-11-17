import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import {
  CssBaseline,
  createStyles,
  withStyles,
  WithStyles
} from "@material-ui/core";
import Registration from "./components/Registration";
import Login from "./components/Login";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  },
  typography: {
    useNextVariants: true
  }
});

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

const App = (props: WithStyles<typeof styles>) => {
  const { classes } = props;
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <div className={classes.wrapper}>
          <Router>
            <Switch>
              <Route path="/register" component={Registration} />
              <Route path="/login" component={Login} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    </>
  );
};

export default withStyles(styles)(App);
