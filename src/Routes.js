import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Wedding from "./pages/Wedding";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/wedding">
        <Wedding />
      </Route>
    </Switch>
  );
}