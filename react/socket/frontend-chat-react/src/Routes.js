import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
