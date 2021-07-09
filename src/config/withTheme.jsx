import React, { useMemo } from "react";
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider, withStyles } from "@material-ui/styles";
import theme from "./theme";

const styles = (theme) => ({
    "@global": {
      '*': {
        fontFamily: `"Poppins", sans-serif !important`,
      },
    },
  });

const withTheme = (Component) => (props) => {
    const DecoratedComponent = useMemo(() => withStyles(styles)(Component), []);
    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <StylesProvider>
                    <DecoratedComponent {...props} />
                </StylesProvider>
            </ThemeProvider>
        </CssBaseline>
    );
}

export default withTheme;