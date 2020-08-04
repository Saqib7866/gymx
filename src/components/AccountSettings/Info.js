import React from "react";
import { Button, FormGroup, Row, Col, Alert, Spinner } from "reactstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AppContext from "Context/AppContext";

const formSchema = Yup.object().shape({
  address: Yup.string().required("Required"),
  phone_number: Yup.number().required("Required"),
});

class InfoTab extends React.Component {
  static contextType = AppContext;
  state = {
    loading: false,
    error: "",
    initialState: {
      address: "",
      phone_number: "",
      achievements: "",
      fee: "",
    },
  };

  componentDidMount() {
    if (!this.context.user.address) {
      setTimeout(() => {
        if (this.context.user.address) {
          let { initialState } = this.state;
          initialState.address = this.context.user.address;
          initialState.phone_number = this.context.user.phone_number;
          this.setState({ initialState });
        }
      }, 1000);
    } else {
      let { initialState } = this.state;
      initialState.address = this.context.user.address;
      initialState.phone_number = this.context.user.phone_number;
      this.setState({ initialState });
    }
  }

  handleSubmit = (values) => {
    if (!this.state.loading) {
      if (this.state.initialState !== values) {
        this.setState({ loading: true });
        this.setState({ error: "" });
        axios
          .put(
            process.env.REACT_APP_API_URL + "/users/" + this.context.user.id,
            {
              phone_number: values.phone_number,
              address: values.address,
            },
            {
              headers: {
                Authorization:
                  "Bearer " +
                  localStorage.getItem(process.env.REACT_APP_TOKEN_NAME),
              },
            }
          )
          .then((res) => {
            this.context.setUser(res.data);
            this.setState({ initialState: values });
            this.setState({ loading: false });
          })
          .catch((error) => {
            this.setState({ error: "Failed to save data..." });
            this.setState({ loading: false });
          });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Formik
              initialValues={this.state.initialState}
              validationSchema={formSchema}
              onSubmit={this.handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  {this.state.error && (
                    <Alert color="danger">{this.state.error}</Alert>
                  )}
                  <FormGroup>
                    <Field
                      component="textarea"
                      name="address"
                      id="address"
                      placeholder="Address"
                      className={`form-control ${
                        errors.address && touched.address && "is-invalid"
                      }`}
                    />
                    {errors.address && touched.address ? (
                      <div className="text-danger">{errors.address}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Field
                      name="phone_number"
                      id="phone_number"
                      placeholder="Phone Number"
                      className={`form-control ${
                        errors.phone_number &&
                        touched.phone_number &&
                        "is-invalid"
                      }`}
                    />
                    {errors.phone_number && touched.phone_number ? (
                      <div className="text-danger">{errors.phone_number}</div>
                    ) : null}
                  </FormGroup>

                  {/* {this.context.user.role.name === "Nutritionist" && (
                    <React.Fragment>
                      <FormGroup>
                        <Field
                          name="achievements"
                          id="achievements"
                          placeholder="Achievements"
                          className={`form-control ${
                            errors.achievements &&
                            touched.achievements &&
                            "is-invalid"
                          }`}
                        />
                        {errors.achievements && touched.achievements ? (
                          <div className="text-danger">
                            {errors.achievements}
                          </div>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        <Field
                          name="fee"
                          id="fee"
                          placeholder="Fee"
                          className={`form-control ${
                            errors.fee && touched.fee && "is-invalid"
                          }`}
                        />
                        {errors.fee && touched.fee ? (
                          <div className="text-danger">{errors.fee}</div>
                        ) : null}
                      </FormGroup>
                    </React.Fragment>
                  )} */}

                  <div className="d-flex justify-content-start flex-wrap">
                    <Button className="mr-1 mb-1" color="primary" type="submit">
                      {this.state.loading && (
                        <Spinner size="sm" color="white" />
                      )}
                      {!this.state.loading && "Save Changes"}
                    </Button>
                    <Button
                      className="mb-1"
                      color="danger"
                      type="reset"
                      outline
                      disabled={this.state.loading}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default InfoTab;
