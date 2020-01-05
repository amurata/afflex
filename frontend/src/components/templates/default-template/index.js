import React from "react";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "../../themes";

const App = props => {
  return (
    <>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <>
                <header />
                <main />
                <footer />
          </>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </>
  );
};

export default App;

