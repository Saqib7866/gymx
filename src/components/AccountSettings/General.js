import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Spinner,
  Alert,
  Media,
} from "reactstrap";
import axios from "axios";
import AppContext from "Context/AppContext";

import noimage from "../../assets/img/user/no-image.png";

class General extends React.Component {
  static contextType = AppContext;
  state = {
    name: this.context.user.name,
    prevName: this.context.user.name,
    changed: false,
    loading: false,
    error: "",
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    if (!this.context.user.name) {
      setTimeout(() => {
        this.setState({ prevName: this.context.user.name });
        this.setState({ name: this.context.user.name });
      }, 1700);
    } else {
      this.setState({ prevName: this.context.user.name });
      this.setState({ name: this.context.user.name });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let name = this.state.name.trim();
    this.setState({ name });

    if (!this.state.loading) {
      this.setState({ error: "" });
      this.setState({ loading: true });
      this.setState({ changed: false });
      axios
        .put(
          process.env.REACT_APP_API_URL + "/users/" + this.context.user.id,
          {
            name: this.state.name,
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
          this.setState({ loading: false });
          this.loadData();
        })
        .catch((res) => {
          console.log("response: ", res);
          this.setState({ error: "Failed to save changes..." });
          this.setState({ loading: false });
          this.setState({ changed: true });
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
        <Form className="mt-2" onSubmit={this.handleSubmit}>
          <AppContext.Consumer>
            {(context) => (
              <Row>
                <Col sm="12">
                  <Media>
                    <Media className="mr-1" left>
                      <Media
                        className="rounded-circle"
                        object
                        src={
                          this.context.user.image
                            ? process.env.REACT_APP_API_URL +
                              this.context.user.image
                            : noimage
                        }
                        alt="User"
                        height="64"
                        width="64"
                      />
                    </Media>
                    <Media className="mt-25" body>
                      <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
                        <Button tag="label" size="sm" color="primary" outline>
                          Upload Photo
                          <Input
                            type="file"
                            name="file"
                            id="uploadImg"
                            hidden
                          />
                        </Button>
                      </div>
                      <p className="text-muted mt-n3">
                        <small>
                          Allowed JPG, GIF or PNG. Max size of 800kB
                        </small>
                      </p>
                    </Media>
                  </Media>
                  <FormGroup>
                    <Label for="userName">Username</Label>
                    <Input
                      value={context.user.username}
                      placeholder="username"
                      disabled
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      value={context.user.email}
                      placeholder="email"
                      disabled
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      id="name"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                        this.setState({
                          changed:
                            e.target.value.trim() === "" ||
                            this.state.prevName === e.target.value
                              ? false
                              : true,
                        });
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col className="d-flex justify-content-start flex-wrap" sm="12">
                  <Button
                    className="mr-50"
                    type="submit"
                    color="primary"
                    disabled={!this.state.changed}
                  >
                    {!this.state.loading && "Save Changes"}
                    {this.state.loading && <Spinner color="white" size="sm" />}
                  </Button>
                  <Button
                    color="danger"
                    disabled={!this.state.changed}
                    onClick={(e) => {
                      let { prevName } = this.state;
                      this.setState({ name: prevName });
                      this.setState({ changed: false });
                      this.setState({ error: "" });
                    }}
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            )}
          </AppContext.Consumer>
        </Form>
      </React.Fragment>
    );
  }
}
export default General;
