import React, { Component } from "react";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/login", user)
      .then(results => {
        //addUser that is passed down from App.js (react) for updating the state of app.js. So it is a prop in form that we get from
        // somewhere that holds addUser. In this addUser we are putting (this.state)
        this.setState({
          id: results.data.id,
          email: results.data.email,
          password: results.data.password,
          redirect: true
        });
      })
      .catch(error =>
        console.error(
          `something went wrong with sending to backend ${error.stack}`
        )
      );
  };

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <br />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
