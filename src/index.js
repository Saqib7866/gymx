import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Login from "views/examples/Login.js";
import Register from "views/examples/Register.js";
import SimpleFooter from "components/Footers/SimpleFooter";
import Navbarr from "views/examples/Navbarr";
import ContactUs from "views/examples/ContactUs";
import DietPlan from "components/DietPlan/DietPlan";
import Cart from "components/cart/Cart";
import Nuts from "views/examples/nutritionists";
import Main from "components/BMR/Main";
import Userdash from "views/examples/userdash";
import NDashboard from "components/NDashboard/ndashboard";
import FinalWorkout from "components/Workout/FinalWorkout";
import { AppProvider } from "Context/AppContext";
import Events from "views/examples/Events";
import AccountSettings from "components/AccountSettings/AccountSettings";
import HNuts from "views/examples/HiredNutrionist";

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <Navbarr />
      <Switch>
        <Route path="/" exact render={(props) => <Index {...props} />} />
        <Route path="#about" exact render={(props) => <about {...props} />} />
        <Route
          path="#contactUs"
          exact
          render={(props) => <ContactUs {...props} />}
        />
        <Route
          path="/BuyProducts"
          exact
          render={(props) => <Cart {...props} />}
        />
        <Route path="/" exact render={(props) => <Register {...props} />} />
        <Route
          path="/BookNutrionist"
          exact
          render={(props) => <Nuts {...props} />}
        />
        <Route path="/BMR/BMI" exact render={(props) => <Main {...props} />} />
        <Route path="/Login" exact render={(props) => <Login {...props} />} />
        <Route
          path="/Register"
          exact
          render={(props) => <Register {...props} />}
        />

        <Route
          path="/ndash"
          exact
          render={(props) => <NDashboard {...props} />}
        />
        <Route path="/Main" exact render={(props) => <Main {...props} />} />
        <Route
          path="/UserDashboard"
          exact
          render={(props) => <Userdash {...props} />}
        />
        <Route path="/workout" exact render={(props) => <Main {...props} />} />
        <Route
          path="/FinalWorkout"
          exact
          render={(props) => <FinalWorkout {...props} />}
        />
        <Route
          path="/DietPlan"
          exact
          render={(props) => <Events {...props} />}
        />
        <Route
          path="/ProgressRecord"
          exact
          render={(props) => <Events {...props} />}
        />
        <Route
          path="/Workout"
          exact
          render={(props) => <FinalWorkout {...props} />}
        />
        <Route path="/MyBMR" exact render={(props) => <Main {...props} />} />
        <Route path="/Events" exact render={(props) => <Events {...props} />} />

        <Route path="/HNuts" exact render={(props) => <HNuts {...props} />} />

        <Route path="/diet-plan" component={DietPlan} />

        <Route path="/account-settings" component={AccountSettings} />
        <Redirect to="/" />
      </Switch>
      <SimpleFooter />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);
