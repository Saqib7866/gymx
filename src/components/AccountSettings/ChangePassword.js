import React from "react";
import { Button, FormGroup, Row, Col, Spinner, Alert } from "reactstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AppContext from "Context/AppContext";

const formSchema = Yup.object().shape({
  // oldpass: Yup.string().required("Required"),
  newpass: Yup.string().required("Required"),
  confirmpass: Yup.string()
    .oneOf([Yup.ref("newpass"), null], "Passwords must match")
    .required("Required"),
});
class ChangePassword extends React.Component {
  static contextType = AppContext;

  state = {
    loading: false,
    error: "",
  };

  handleSubmit = (values) => {
    console.log(values);
    if (!this.state.loading) {
      this.setState({ loading: true });
      this.setState({ error: "" });
      axios
        .put(
          process.env.REACT_APP_API_URL + "/users/" + this.context.user.id,
          {
            password: values.newpass,
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
          this.setState({ loading: false });
        })
        .catch((error) => {
          this.setState({ error: "Failed to change password..." });
          this.setState({ loading: false });
        });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Row className="pt-1">
          <Col sm="12">
            <Formik
              initialValues={{
                // oldpass: "",
                newpass: "",
                confirmpass: "",
              }}
              validationSchema={formSchema}
              onSubmit={this.handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  {this.state.error && (
                    <Alert color="danger">{this.state.error}</Alert>
                  )}
                  {/* <FormGroup>
                    <Field
                      name="oldpass"
                      id="oldpass"
                      className={`form-control ${
                        errors.oldpass && touched.oldpass && "is-invalid"
                      }`}
                      placeholder="Old Password"
                    />
                    {errors.oldpass && touched.oldpass ? (
                      <div className="text-danger">{errors.oldpass}</div>
                    ) : null}
                  </FormGroup> */}
                  <FormGroup>
                    <Field
                      name="newpass"
                      placeholder="New Password"
                      id="newpass"
                      className={`form-control ${
                        errors.newpass && touched.newpass && "is-invalid"
                      }`}
                    />
                    {errors.newpass && touched.newpass ? (
                      <div className="text-danger">{errors.newpass}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Field
                      name="confirmpass"
                      id="confirmpass"
                      className={`form-control ${
                        errors.confirmpass &&
                        touched.confirmpass &&
                        "is-invalid"
                      }`}
                      placeholder="Confirm Password"
                    />
                    {errors.confirmpass && touched.confirmpass ? (
                      <div className="text-danger">{errors.confirmpass}</div>
                    ) : null}
                  </FormGroup>
                  <div className="d-flex justify-content-start flex-wrap">
                    <Button className="mr-1 mb-1" color="primary" type="submit">
                      {this.state.loading ? (
                        <Spinner color="white" />
                      ) : (
                        "Save Changes"
                      )}
                    </Button>
                    <Button
                      className="mb-1"
                      color="danger"
                      type="reset"
                      outline
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
export default ChangePassword;
