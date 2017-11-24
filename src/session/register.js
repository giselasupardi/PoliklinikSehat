import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import Captcha from 'react-captcha';
import '../css/register.css';

class Register extends Component {

  render() {
    return (
      <div className='container'>
        <Header textAlign='center'>
          <h1> REGISTER </h1>
        </Header>
        <Form className='registerform' action='/appointment'>
          <table className="register-table">
            <tr>
              <td>Email</td>
              <td><input placeholder='Email' /></td> 
            </tr>
            <tr>
              <td>Password</td>
              <td><input placeholder='Password' type='password' /></td> 
            </tr>
            <tr>
              <td>Confirm Password</td>
              <td><input placeholder='Confirm Password' type='password' /></td>
            </tr>
          </table>
          <div className='captcha'>
            <Captcha
              sitekey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
              lang = 'en'
              theme = 'light'
            />
          </div>
          <div className='registerbutton'>
            <Button href="/" negative>Cancel</Button>
            <Button type='submit' positive>Sign Up</Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default Register;