import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ArticlesHub from "./articleHub";
import ArticlePage from "./articlePage";

export default function Articles() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <ArticlesHub />
      </Route>
      <Route path={`${path}/:articleName`}>
        <ArticlePage />
      </Route>
    </Switch>
  );
}
