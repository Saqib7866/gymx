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
import { Redirect } from "react-router";

class General extends React.Component {
  static contextType = AppContext;
  state = {
    img: undefined,
    imgFile: undefined,
    name: this.context.user.name,
    prevName: this.context.user.name,
    changed: false,
    loading: false,
    error: "",
    uploading: false,
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

  uploadImage = () => {
    if (this.state.img !== undefined) {
      this.setState({ uploading: true });
      let imageId = "";
      let previousImageId = this.context.user.image
        ? this.context.user.image.id
          ? this.context.user.image.id
          : ""
        : "";
      const formData = new FormData();
      formData.append("files", this.state.imgFile);

      //uploading image to server
      axios
        .post(process.env.REACT_APP_API_URL + "/upload", formData, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem(process.env.REACT_APP_TOKEN_NAME),
          },
        })
        .then((res) => {
          imageId = res.data[0].id;
          //assigning uploaded image to user
          axios
            .put(
              process.env.REACT_APP_API_URL + "/users/" + this.context.user.id,
              {
                image: imageId,
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
              this.setState({ uploading: false, img: undefined });
              this.loadData();
            })
            .catch((res) => {
              this.setState({ uploading: false });
              //removing image from server if it is not assigned to the user
              axios.delete(
                process.env.REACT_APP_API_URL + "/upload/files/" + imageId,
                {
                  headers: {
                    Authorization:
                      "Bearer " +
                      localStorage.getItem(process.env.REACT_APP_TOKEN_NAME),
                  },
                }
              );
            });

          if (previousImageId) {
            //removing previous image of user from server
            axios
              .delete(
                process.env.REACT_APP_API_URL +
                  "/upload/files/" +
                  previousImageId,
                {
                  headers: {
                    Authorization:
                      "Bearer " +
                      localStorage.getItem(process.env.REACT_APP_TOKEN_NAME),
                  },
                }
              )
              .then((res) => {
                console.log("Previous image deleted: ", res);
              })
              .catch((res) => {
                console.log("Failed to delete previous image: " + res);
              });
          }
        })
        .catch((res) => {
          this.setState({ uploading: false });
          console.log("Upload failed: ", res);
        });
    }
  };

  render() {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) === null) {
      return <Redirect to="/Login" />;
    } else {
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
                        {!this.state.uploading && (
                          <Media
                            className="rounded-circle"
                            object
                            src={
                              this.state.img
                                ? this.state.img
                                : this.context.user.image
                                ? process.env.REACT_APP_API_URL +
                                  this.context.user.image.url
                                : noimage
                            }
                            alt="User"
                            height="64"
                            width="64"
                          />
                        )}
                        {this.state.uploading && <Spinner />}
                      </Media>
                      <Media className="mt-25" body>
                        <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
                          <Button
                            tag="label"
                            size="sm"
                            color="primary"
                            outline
                            style={{ cursor: "pointer" }}
                          >
                            Select Photo
                            <Input
                              type="file"
                              accept="image/*"
                              name="file"
                              id="uploadImg"
                              onChange={(e) => {
                                var file = e.target.files[0];
                                var reader = new FileReader();
                                var url = reader.readAsDataURL(file);

                                reader.onloadend = (e) => {
                                  this.setState({
                                    img: [reader.result],
                                    imgFile: file,
                                  });
                                };
                              }}
                              hidden
                            />
                          </Button>
                          {this.state.img && (
                            <React.Fragment>
                              <Button
                                tag="label"
                                size="sm"
                                color="success"
                                outline
                                style={{ cursor: "pointer" }}
                                onClick={this.uploadImage}
                              >
                                Upload Photo
                              </Button>
                              <Button
                                tag="label"
                                size="sm"
                                color="danger"
                                outline
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  this.setState({
                                    img: undefined,
                                    imgFile: undefined,
                                  });
                                }}
                              >
                                Remove
                              </Button>
                            </React.Fragment>
                          )}
                        </div>
                        <p className="text-muted mt-n2">
                          <small>Allowed all types of images</small>
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
                  <Col
                    className="d-flex justify-content-start flex-wrap"
                    sm="12"
                  >
                    <Button
                      className="mr-50"
                      type="submit"
                      color="primary"
                      disabled={!this.state.changed}
                    >
                      {!this.state.loading && "Save Changes"}
                      {this.state.loading && (
                        <Spinner color="white" size="sm" />
                      )}
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
                      outline
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
}
export default General;
