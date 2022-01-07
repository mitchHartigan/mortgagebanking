import React from "react";
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ArticlesHub from "./ArticlesHub";
import ArticlePage from "./ArticlePage";

/* @param props
 * @param props.toggleResoureces - function that takes the user
 * back to the Resources page when called.
 */

export default function Articles(props) {
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

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 50px 0px 0px 0px;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;
