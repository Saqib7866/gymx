import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Alert,
  Table,
  Container,
  Spinner,
} from "reactstrap";
import Axios from "axios";
import AppContext from "Context/AppContext";
import background from "../../assets/img/theme/workout.jpg";

class HiredNutritionists extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = { appointments: [], error: "", loading: true };
  }

  componentDidMount() {
    if (this.context.user.id) {
      Axios.get(
        process.env.REACT_APP_API_URL +
          "/nutritionist-appointments?client=" +
          this.context.user.id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              process.env.REACT_APP_TOKEN_NAME
            )}`,
          },
        }
      )
        .then((res) => {
          console.log(res);
          this.setState({ appointments: res.data, loading: false });
        })
        .catch((error) => {
          this.setState({ error: "Error loading data...", loading: false });
        });
    }
  }

  render() {
    return (
      <div
        className="mt-5"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {this.state.loading && (
          <div className="vh-100 d-flex justify-content-center align-items-center">
            <Spinner color="primary" size="lg" />
          </div>
        )}
        {!this.state.loading && (
          <Container className="pt-5 pb-8">
            <Card className="mt-5 shadow">
              <CardHeader>Appointments</CardHeader>
              <CardBody>
                {this.state.error && (
                  <Alert color="danger">{this.state.error}</Alert>
                )}
                {!this.state.error && (
                  <div>
                    {this.state.appointments.length < 1 && (
                      <div className="text-center h2 text-danger">
                        You do not have any appointments...
                      </div>
                    )}
                    {this.state.appointments.length > 0 && (
                      <div>
                        <Table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Nutritionist Name</th>
                              <th>Date</th>
                              <th>Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.appointments.map((a, i) => (
                              <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{a.nutritionist.name}</td>
                                <td>{a.date_time.split("T")[0]}</td>
                                <td>
                                  {a.date_time.split("T")[1].split(".")[0]}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    )}
                  </div>
                )}
              </CardBody>
            </Card>
          </Container>
        )}
      </div>
    );
  }
}

export default HiredNutritionists;
