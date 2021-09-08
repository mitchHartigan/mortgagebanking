import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { globalStyles } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import "./index.css";

import Homepage from "pages/homepage/index";
import ULICalculator from "pages/resources/uli-calculator/index";
import Resources from "pages/resources/Resources";
import PracticeAreas from "pages/practice-areas/PracticeAreas";

function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/check-digit-calculator">
            <ULICalculator />
          </Route>
          <Route path="/initiatives">
            <p>Initiatives</p>
          </Route>
          <Route path="/practice-areas">
            <PracticeAreas />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
