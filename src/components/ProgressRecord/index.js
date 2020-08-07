import React, { Component } from "react";
import { Redirect } from "react-router";
import background from "../../assets/img/theme/workout.jpg";
import { Table, Card, CardTitle, CardBody } from "reactstrap";
import AppContext from "Context/AppContext";
import DietTable from "components/BMR/DietTable";

class ProgressRecord extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) === null) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div
          className=""
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container pt-5 pb-5">
            {!this.context.user.progress_record && (
              <div className="container vh-100 d-flex align-items-center justify-content-center">
                <div>
                  <h1 className="text-center text-white mt-5 pt-5">
                    You do not have recorded any progress...
                  </h1>
                </div>
              </div>
            )}
            {this.context.user.progress_record && (
              <div>
                <Card className="mt-5 p-3 shadow">
                  <CardTitle className="h3 container">Diet Plan</CardTitle>
                  <CardBody>
                    <DietTable
                      rice={
                        this.context.user.diet_plan
                          ? this.context.user.diet_plan.rice
                          : this.context.dietTable.rice
                      }
                      chicken={
                        this.context.user.diet_plan
                          ? this.context.user.diet_plan.chicken
                          : this.context.dietTable.chicken
                      }
                      olive={
                        this.context.user.diet_plan
                          ? this.context.user.diet_plan.olive
                          : this.context.dietTable.olive
                      }
                      egg={
                        this.context.user.diet_plan
                          ? this.context.user.diet_plan.egg
                          : this.context.dietTable.egg
                      }
                    />
                  </CardBody>
                </Card>

                <div className="card shadow mt-5 p-3">
                  <span className="h3">Progress Record</span>
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Weight</th>
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.context.user.progress_record.map((record, i) => (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>{record.weight}</td>
                          <td>{record.date.split("T")[0]}</td>
                          <td>{record.date.split("T")[1].split(".")[0]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}

export default ProgressRecord;
