import { Route, Routes as Switch } from "react-router-dom";
import { ActionPlain } from "../pages/ActionPlain";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Swot } from "../pages/Swot";
import { MenuInfo } from "../pages/MenuInfo";
import { BusinessModel } from "../pages/BusinessModel";
import { MenuAction } from "../pages/MenuAction";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" Component={Login} />
      <Route path="/home" Component={Home} />
      <Route path="/swot" Component={Swot} />
      <Route path="/action-plain" Component={ActionPlain} />
      <Route path="/menu-info" Component={MenuInfo} />
      <Route path="/menu-action" Component={MenuAction} />
      <Route path="/business-model" Component={BusinessModel} />
      <Route path="*" Component={NotFound} />
    </Switch>
  );
};
