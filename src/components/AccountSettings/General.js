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
} from "reactstrap";
import axios from "axios";
import AppContext from "Context/AppContext";

class General extends React.Component {
  static contextType = AppContext;
  state = {
    name: "",
    prevName: "",
    changed: false,
    username: "",
    email: "",
    loading: false,
    error: "",
  };

  componentDidMount() {
    // this.loadData();
  }

  loadData = () => {
    if (!this.context.user.name) {
      setTimeout(() => {
        this.setState({ username: this.context.user.username });
        this.setState({ email: this.context.user.email });
        this.setState({ name: this.context.user.name });
        this.setState({ prevName: this.context.user.name });
      }, 1000);
    } else {
      this.setState({ username: this.context.user.username });
      this.setState({ email: this.context.user.email });
      this.setState({ name: this.context.user.name });
      this.setState({ prevName: this.context.user.name });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let name = this.state.name.trim();
    this.setState({ name });

    if (!this.state.loading) {
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
          <Row>
            <Col sm="12">
              <FormGroup>
                <Label for="userName">Username</Label>
                <Input
                  value={this.state.username}
                  placeholder="username"
                  disabled
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="email">Email</Label>
                <Input value={this.state.email} placeholder="email" disabled />
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
                }}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </React.Fragment>
    );
  }
}
export default General;
