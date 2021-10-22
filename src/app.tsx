import { Route, Switch } from "react-router-dom";

import { ProcessesMenuView } from "./views/processes-menu-view";

export default function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/static/processes-menu/:origin/:id">
        <ProcessesMenuView />
      </Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}
