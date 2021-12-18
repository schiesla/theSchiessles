import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Wedding from "./pages/Wedding";
import Resume from "./pages/logan/Resume";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Main /></Route>
      <Route exact path="/home"><Home /></Route>
      <Route exact path="/wedding"><Wedding /></Route>
      <Route exact path="/logan/resume"> <Resume title="Logan Schiessle" img={process.env.PUBLIC_URL + "/favicon.ico"}/></Route>
    </Switch>
  );
}