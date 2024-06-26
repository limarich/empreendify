import { Route, Routes as Switch } from "react-router-dom";
import { ActionPlan } from "../pages/ActionPlan";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Swot } from "../pages/Swot";
import { MenuInfo } from "../pages/MenuInfo";
import { BusinessModel } from "../pages/BusinessModel";
import { MenuAction } from "../pages/MenuAction";
import { Blog } from "../pages/Blog";
import { BusinessPlan } from "../pages/BusinessPlan";
import { Form } from "../pages/Form";
import { EntrepreneurialActivity } from "../pages/EntrepreneurialActivity";
import { LandingPage } from "../pages/LandingPage";
import { TextEntreprenaurialActivity } from "../pages/EntrepreneurialActivity/TextEntreprenaurialActivity";
import { Profile } from "../pages/Profile";
import { EntrepreneurialProfile } from "../pages/EntrepreneurialProfile";

export const Routes = () => {
  return (
    <Switch>
      <Route path="*" Component={NotFound} />

      <Route path="/" Component={LandingPage} />
      <Route path="/landing-page" Component={LandingPage} />

      <Route path="/login" Component={Login} />

      <Route path="/home" Component={Home} />
      <Route path="/home/:blogID" Component={Blog} />
      <Route path="/swot" Component={Swot} />
      <Route path="/action-plan" Component={ActionPlan} />
      <Route path="/business-model" Component={BusinessModel} />
      <Route path="/business-plan" Component={BusinessPlan} />
      <Route path="/business-plan/:formID" Component={Form} />
      <Route
        path="/entrepreneurial-activity"
        Component={EntrepreneurialActivity}
      />
      <Route
        path="/entrepreneurial-activity/:textID"
        Component={TextEntreprenaurialActivity}
      />

      {/* <Route path="/menu-action" Component={MenuAction} /> */}
      {/* <Route path="/menu-info" Component={MenuInfo} /> */}
      <Route path="/profile" Component={Profile} />
      <Route
        path="/entrepreneurial-profile"
        Component={EntrepreneurialProfile}
      />
    </Switch>
  );
};
