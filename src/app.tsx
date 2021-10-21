import { Route, Switch } from "react-router-dom";
import React from "react";

import { StaticView } from "./views/static-view";

export default function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/static">
        <StaticView />
      </Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}
