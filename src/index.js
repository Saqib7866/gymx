import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "Context/AppContext";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import { Spinner } from "reactstrap";
import { history } from "history.js";

import About from "components/Navbars/about.js";
import ContactUs from "views/examples/ContactUs.js";

const Index = lazy(() => import("./views/Index.js"));
const SimpleFooter = lazy(() => import("./components/Footers/SimpleFooter"));
const Navbarr = lazy(() => import("./views/examples/Navbarr"));
const Login = lazy(() => import("./views/examples/Login"));
const Register = lazy(() => import("./views/examples/Register.js"));
const Cart = lazy(() => import("./components/cart/Cart"));
const DietPlan = lazy(() => import("./components/DietPlan/DietPlan"));
const Nuts = lazy(() => import("./views/examples/nutritionists"));
const Main = lazy(() => import("./components/BMR/Main"));
const Userdash = lazy(() => import("./views/examples/userdash"));
const NDashboard = lazy(() => import("./components/NDashboard"));
const FinalWorkout = lazy(() => import("./components/Workout/FinalWorkout"));
const Events = lazy(() => import("./views/examples/EventCardDisplay"));
const PlaceOrder = lazy(() => import("./views/examples/PlaceOrder"));
const PageNotFound = lazy(() => import("./components/PageNotFound/index.js"));
const AccountSettings = lazy(() =>
  import("./components/AccountSettings/AccountSettings")
);
const ProgressRecord = lazy(() =>
  import("./components/ProgressRecord/index.js")
);
const HiredNutritionists = lazy(() =>
  import("./components/HiredNutritionists/index.js")
);
const ClientBookings = lazy(() =>
  import("./components/ClientBookings/index.js")
);
// const HNuts = lazy(() => import("./views/examples/HiredNutrionist"));

ReactDOM.render(
  <Suspense
    fallback={
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <Spinner size="lg" color="primary" />
      </div>
    }
  >
    <AppProvider>
      <Router history={history}>
        <Navbarr />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/aboutus" component={About} />

          <Route path="/buy-products" component={Cart} />
          <Route path="/book-nutrionist" component={Nuts} />
          <Route path="/bmr-bmi" component={Main} />
          <Route path="/diet-plan" component={DietPlan} />
          <Route path="/progress-record" component={ProgressRecord} />
          <Route path="/hired-nutritionist" component={HiredNutritionists} />
          <Route path="/client-bookings" component={ClientBookings} />

          <Route path="/user-dashboard" component={Userdash} />
          <Route path="/nutritionist-dashboard" component={NDashboard} />

          <Route path="/account-settings" component={AccountSettings} />

          <Route path="/workout" component={FinalWorkout} />

          <Route path="/events" component={Events} />
          <Route path="/placeorder" component={PlaceOrder} />

          <Route path="*" component={PageNotFound} />
        </Switch>
        <SimpleFooter />
      </Router>
    </AppProvider>
  </Suspense>,
  document.getElementById("root")
);
