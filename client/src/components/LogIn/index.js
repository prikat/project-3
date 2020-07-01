import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../LogIn/style.css"

class LogIn extends Component {
  constructor () {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }
  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value});
  
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("success!");

  const userData = {
    username: this.state.username,
    password: this.state.password
  };

  console.log(userData);
  };


render () {
  const { errors } = this.state;
    return (
        <div className="form_bg">
          <div className="container">
             <div className="row">
                <div className=" col-md-8   col-sm-8   col-xs-6   col-lg-10">
                <form className="form_horizontal" onSubmit={this.onSubmit}>
                    <div className="form_icon" style={{fontSize: "50px"}}><i id="paw" className="fa fa-paw"></i></div>
                    <h3 className="title">FidoFriend</h3>
                    <h4>Log-In</h4>
                    <div className="form-group">
                      <input className="form-control" type="text" name="" placeholder="username" onChange={this.onChange} value={this.state.username} error={errors.username} id="username"/>
                    </div>
                    <div className="form-group">
                    <input className="form-control" type="password" name="" placeholder="password" onChange={this.onChange} value={this.state.password} error={errors.password} id="password"/>
                    </div>
                    <button className="btn signin">Login</button>
                    <br/>
                    <br/>
                    <h5><Link to="/signup">Create New Account <i className="fa fa-arrow-right"></i></Link></h5>
                </form>
                </div>
             </div>
          </div>
    </div>
    )
  }
}

export default LogIn;