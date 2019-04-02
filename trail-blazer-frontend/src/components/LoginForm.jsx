import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (

        <div>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="regular-form"
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="regular-form"
                id="password"
                name="password"
                type="text"
                placeholder="Enter password"
              />
            </div>
            <button className="btn btn-block">Register</button>
          </form>

          <p className="login-msg">Don’t have an account? <a href="/register">Sign up here.</a></p>
        </div>
    );
  }
}
export default LoginForm;