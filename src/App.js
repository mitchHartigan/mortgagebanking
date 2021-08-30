import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <p>Homepage</p>
        </Route>
        <Route path="/resources">
          <p>Resources</p>
        </Route>
        <Route path="/initiatives">
          <p>Initiatives</p>
        </Route>
        <Route path="/practice-areas">
          <p>Practice Areas</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
