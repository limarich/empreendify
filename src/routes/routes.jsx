import { Route, Routes as Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" Component={Login} />
      <Route path="/home" Component={Home} />
    </Switch>
  );
};
