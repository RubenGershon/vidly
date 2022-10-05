import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BasicInput from "./basicInput";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      username: "username is requiered",
      password: "password is requiered",
    },
  };
  handleSubmit = (e) => {
    if (this.validate()) console.log("validate");
    else console.log("no validate");
  };

  validate() {
    const errors = {};
    const { username, password } = this.state.errors;
    if (!username) errors.username = "username is requiered";
    if (!password) errors.password = "password is requiered";

    this.setState({ errors });
    return Object.keys(errors) !== 0;
  }
  render() {
    const { username, password, errors } = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <Form noValidate onSubmit={this.handleSubmit}>
          <BasicInput
            label={"Username"}
            type={"text"}
            placeholder={"Enter a username"}
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
            error={errors.username}
          />

          <BasicInput
            label={"Password"}
            type={"password"}
            placeholder={"Enter a password"}
            value={password}
            onChange={(e) => this.setState({ username: e.target.value })}
            error={errors.password}
          />

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
