import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Captcha from 'react-captcha';
import '../css/login.css';

class Login extends Component {

  render() {
    return (
      <div className='session-container'>
        <Header textAlign='center'>
          <h1> LOGIN </h1>
        </Header>
        <Form className='session-form' action='/appointment'>
          <div className='loginbox'>
          <table class='login-table session-table'>
            <tr>
              <td>Email</td>
              <td><input placeholder='Email' /></td> 
            </tr>
            <tr>
              <td>Password</td>
              <td><input placeholder='Password' type='password' /></td> 
            </tr>
          </table>
          <div className='captcha'>
            <Captcha
              sitekey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
              lang = 'en'
              theme = 'light'
          />
          </div>
          <div className='loginbutton'>
            <Button type='submit' primary>Login</Button>
          </div>
          </div>
        </Form>
        <br/>        
        <div className='haveaccount'>
          <Link to='/'>
            <p className='signin'>Don't have an account?</p>
          </Link>
        </div>
      </div>
    );
  }
}
export default Login;