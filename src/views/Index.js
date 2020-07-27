import React from "react";

// reactstrap components
import { Container, Row, CarouselCaption } from "reactstrap";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Carousel from "./IndexSections/Carousel.js";
import Register from "./examples/Register.js";
import NRegister from "./examples/NRegister.js";
import Nuts from "./examples/nutritionists.js";
import About from "components/Navbars/about.js";
import Carosell from "./examples/Carosell.js";
import Navbarr from "./examples/Navbarr.js";
import NDashboard from "components/NDashboard/ndashboard.js";
import ContactUs from "./examples/ContactUs.js";
import Workout from "components/Workout/workout.js";
import Workout1 from "components/Workout/workout1.js";
import Main from "components/BMR/Main.jsx";
import Cart from "components/cart/Cart.js";
import Events from "./examples/Events.js";
import Userdash from "./examples/userdash.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <div className="Container">
            <Carosell />
            <About />
            <Carousel />
            <ContactUs />
            <Events />
            <Userdash />
          </div>
        </main>
      </>
    );
  }
}

export default Index;
