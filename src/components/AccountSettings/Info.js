import React from "react";
import { Button, FormGroup, Row, Col, Alert, Spinner } from "reactstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AppContext from "Context/AppContext";

const formSchema = Yup.object().shape({
  state: Yup.string().required("Required"),
  district: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  pincode: Yup.number().required("Required"),
  address: Yup.string().required("Required"),
  phone_number: Yup.number().required("Required"),
});

class InfoTab extends React.Component {
  static contextType = AppContext;
  state = {
    loading: false,
    error: "",
    initialState: {
      state: "",
      district: "",
      city: "",
      pincode: "",
      address: "",
      phone_number: "",
    },
  };

  componentDidMount() {
    // if (!this.context.user.address) {
    //   setTimeout(() => {
    //     if (this.context.user.address) {
    //       let { initialState } = this.state;
    //       initialState.state = this.context.user.address.state;
    //       initialState.district = this.context.user.address.district;
    //       initialState.city = this.context.user.address.city;
    //       initialState.pincode = this.context.user.address.pincode;
    //       initialState.address = this.context.user.address.street;
    //       initialState.phone_number = this.context.user.phone_number;
    //       this.setState({ initialState });
    //     }
    //   }, 1000);
    // } else {
    //   let { initialState } = this.state;
    //   initialState.state = this.context.user.address.state;
    //   initialState.district = this.context.user.address.district;
    //   initialState.city = this.context.user.address.city;
    //   initialState.pincode = this.context.user.address.pincode;
    //   initialState.address = this.context.user.address.street;
    //   initialState.phone_number = this.context.user.phone_number;
    //   this.setState({ initialState });
    // }
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
              address: {
                state: values.state,
                district: values.district,
                city: values.city,
                pincode: values.pincode,
                street: values.address,
              },
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
                      name="state"
                      id="state"
                      className={`form-control ${
                        errors.state && touched.state && "is-invalid"
                      }`}
                      placeholder="State / Province"
                    />
                    {errors.state && touched.state ? (
                      <div className="text-danger">{errors.state}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Field
                      name="district"
                      id="district"
                      className={`form-control ${
                        errors.district && touched.district && "is-invalid"
                      }`}
                      placeholder="District / Division"
                    />
                    {errors.district && touched.district ? (
                      <div className="text-danger">{errors.district}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Field
                      name="city"
                      id="city"
                      placeholder="City / Town"
                      className={`form-control ${
                        errors.city && touched.city && "is-invalid"
                      }`}
                    />
                    {errors.city && touched.city ? (
                      <div className="text-danger">{errors.city}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Field
                      name="pincode"
                      id="pincode"
                      placeholder="Pincode"
                      className={`form-control ${
                        errors.pincode && touched.pincode && "is-invalid"
                      }`}
                    />
                    {errors.pincode && touched.pincode ? (
                      <div className="text-danger">{errors.pincode}</div>
                    ) : null}
                  </FormGroup>
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

                  <div className="d-flex justify-content-start flex-wrap">
                    <Button className="mr-1 mb-1" color="primary" type="submit">
                      {this.state.loading && <Spinner color="white" />}
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
