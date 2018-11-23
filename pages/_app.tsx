import React from "react";
import Head from "next/head";
import App from "next/app";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import getPageContext, { PageContext } from "../utils/getPageContext";

class MyApp extends App {
  private pageContext: PageContext;
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }
  public componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Company's Dashboard</title>
        </Head>
        <style jsx={true} global={true}>
          {`
            html {
              width: 100%;
              height: 100%;
            }

            body {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
                "Droid Sans", "Helvetica Neue", sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

            body > #__next {
              width: 100%;
              height: 100%;
            }

            code {
              font-family: source-code-pro, Menlo, Monaco, Consolas,
                "Courier New", monospace;
            }
          `}
        </style>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </>
    );
  }
}

export default MyApp;
