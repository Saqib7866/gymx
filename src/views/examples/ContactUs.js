import React, { Component } from "react";
import "./Navbarr.css";
import "./contactus.css";
class ContactUs extends Component {
  state = {};

  render() {
    return (
      <div className="contact-bg">
        <section id="ContactUs" className=" mb-4 container">
          <div>
            {/*Section heading*/}
            <h2 className="h1-responsive pt-7 pb-4 font-weight-bold text-center my-4">
              <strong style={{ color: "yellow" }}>STAY IN TOUCH</strong>
            </h2>
            {/*Section description*/}
            <p
              style={{ fontWeight: "bold" }}
              className="text-center w-responsive mx-auto mb-5"
            >
              <strong>
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of
                hours to help you.
              </strong>
            </p>
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-9 mb-md-0 mb-5">
                <form
                  id="contact-form"
                  name="contact-form"
                  action="mail.php"
                  method="POST"
                >
                  {/*Grid row*/}
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          style={{
                            backgroundColor: "rgba(52,52,52,0.1)",
                            border: "2px solid red",
                            color: "white ",
                          }}
                          type="text"
                          id="name"
                          name="name"
                          className="mb-5 form-control"
                          placeholder="YOUR NAME"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          style={{
                            backgroundColor: "rgba(52,52,52,0.1)",
                            border: "2px solid red",
                            color: "white ",
                          }}
                          type="text"
                          id="email"
                          name="email"
                          className="mb-5 form-control"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input
                          style={{
                            backgroundColor: "rgba(52,52,52,0.1)",
                            border: "2px solid red",
                            color: "white ",
                          }}
                          type="text"
                          id="subject"
                          name="subject"
                          className="mb-5 form-control"
                          placeholder="SUBJECT"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea
                          style={{
                            backgroundColor: "rgba(52,52,52,0.1)",
                            border: "2px solid red",
                            color: "white ",
                          }}
                          type="text"
                          id="message"
                          name="message"
                          rows={2}
                          className="form-control md-textarea mb-5"
                          defaultValue={""}
                          placeholder="YOUR MESSAGE"
                        />
                      </div>
                    </div>
                  </div>
                  {/*Grid row*/}
                </form>
                <div className="text-center text-md-left">
                  <a
                    style={{
                      backgroundColor: "rgba(52,52,52,0.4)",
                      border: "2px solid red",
                    }}
                    className="btn btn-default"
                    onclick="document.getElementById('contact-form').submit();"
                  >
                    Send
                  </a>
                </div>
                <div className="status" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ContactUs;
