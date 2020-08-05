import React, { Component } from "react";
import Axios from "axios";

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    loading: true,
    user: {},
    dietTable: {
      rice: 0,
      chicken: 0,
      olive: 0,
      egg: 0,
    },
  };

  componentDidMount() {
    this.setState({ loading: true });
    if (localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) !== null) {
      Axios.get(process.env.REACT_APP_API_URL + "/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            process.env.REACT_APP_TOKEN_NAME
          )}`,
        },
      }).then((res) => {
        let user = res.data;
        Axios.get(
          process.env.REACT_APP_API_URL + "/user-types/" + user.user_type
        ).then((res) => {
          user.user_type = res.data;
          this.setUser(user);
          setTimeout(() => {
            this.setState({ loading: false });
          }, 1000);
        });
      });
    }
  }

  // Methods to update state
  setUser = (user) => {
    this.setState({ user });
  };

  // Diet table values
  setRice = (rice) => {
    let { dietTable } = this.state;
    dietTable.rice = rice;
    this.setState({ dietTable });
  };

  setChicken = (chicken) => {
    let { dietTable } = this.state;
    dietTable.chicken = chicken;
    this.setState({ dietTable });
  };

  setOlive = (olive) => {
    let { dietTable } = this.state;
    dietTable.olive = olive;
    this.setState({ dietTable });
  };

  setEgg = (egg) => {
    let { dietTable } = this.state;
    dietTable.egg = egg;
    this.setState({ dietTable });
  };

  render() {
    const { children } = this.props;

    const { user } = this.state;
    const { dietTable } = this.state;

    const { setUser } = this;
    const { setRice } = this;
    const { setChicken } = this;
    const { setOlive } = this;
    const { setEgg } = this;

    return (
      <AppContext.Provider
        value={{
          user,
          dietTable,

          setUser,
          setRice,
          setChicken,
          setOlive,
          setEgg,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;

export { AppProvider };
