import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { globalStyles } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import "./index.css";

import Homepage from "pages/homepage/Homepage";
import ULICalculator from "pages/resources/uli-calculator/index";
import Resources from "pages/resources/Resources";
import PracticeAreas from "pages/practice-areas/PracticeAreas";
import Initiatives from "pages/initiatives/Initiatives";
import SearchGlossary from "pages/glossary-search";
import Articles from "pages/articles";
import Admin from "pages/admin/index";
import AcronymReview from "pages/admin/AcronymReview";

function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />

          <Route path="/resources">
            <Resources />
          </Route>

          <Route path="/articles">
            <Articles />
          </Route>

          <Route path="/check-digit-calculator">
            <ULICalculator />
          </Route>

          <Route path="/search-glossary">
            <SearchGlossary />
          </Route>

          <Route path="/single-post/2017/05/28/uli-check-digit-calculator">
            <ULICalculator />
          </Route>

          <Route path="/initiatives">
            <Initiatives />
          </Route>

          <Route path="/practice-areas">
            <PracticeAreas />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/acronym-editor">
            <AcronymReview />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
