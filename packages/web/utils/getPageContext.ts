import { SheetsRegistry, GenerateClassName } from "jss";
import {
  createMuiTheme,
  createGenerateClassName,
  Theme
} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  },
  typography: {
    useNextVariants: true
  }
});

export interface PageContext {
  theme: Theme;
  sheetsManager: Map<any, any>;
  sheetsRegistry: SheetsRegistry;
  generateClassName: GenerateClassName<any>;
}

function createPageContext(): PageContext {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

interface ExtendedProcess extends NodeJS.Process {
  browser: boolean;
}
interface ExtendedGlobal extends NodeJS.Global {
  __INIT_MATERIAL_UI__: PageContext;
}

export default function getPageContext(): PageContext {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!(process as ExtendedProcess).browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!(global as ExtendedGlobal).__INIT_MATERIAL_UI__) {
    (global as ExtendedGlobal).__INIT_MATERIAL_UI__ = createPageContext();
  }

  return (global as ExtendedGlobal).__INIT_MATERIAL_UI__;
}
