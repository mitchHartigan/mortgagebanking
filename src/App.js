import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { globalStyles } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import "./index.css";

import Homepage from "pages/homepage/index";
import Calculator from "pages/resources/uli-calculator/index";

function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/resources">
            <Calculator />
          </Route>
          <Route path="/initiatives">
            <p>Initiatives</p>
          </Route>
          <Route path="/practice-areas">
            <p>Practice Areas</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
