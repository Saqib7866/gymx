import React from "react";

import Carousel from "./IndexSections/Carousel.js";
import About from "components/Navbars/about.js";
import Carosell from "./examples/Carosell.js";
import ContactUs from "./examples/ContactUs.js";
import Events from "./examples/Events.js";
import Userdash from "./examples/userdash.js";
import ReactStripePaymentBtn from '../components/ReactStripe/ReactStripePaymentBtn'

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
            <ReactStripePaymentBtn />
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
