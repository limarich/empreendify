import { Route, Routes as Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" Component={Login} />
      <Route path="/home" Component={Home} />
      <Route path="*" Component={NotFound} />
    </Switch>
  );
};
