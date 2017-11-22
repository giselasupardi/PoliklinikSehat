import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import Captcha from 'react-captcha';
import moment from 'moment';
import Navbar from './navbar';
import './css/bpjsvalidation.css';
import 'react-datepicker/dist/react-datepicker.css';

class BPJSValidation extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {

    return (
      <div>
      
        <Navbar name='Status BPJS'/>
        <br/>
        <Form action='/statusbpjs' className='form'>
          <Form.Field width={8} required className="card-number" >
            <label>BPJS Card Number</label>
            <input placeholder='Card Number' required/>
          </Form.Field>
          <Form.Field required className='birth-date'>
            <label>Birth Date</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required className='captcha'>
            <Captcha
              sitekey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
              lang = 'en'
              theme = 'light'
            />
          </Form.Field>
          <Form.Field className="finished">
            <Button href="/helpbpjs/first">How To Register </Button>
            <Button type='submit'>Submit</Button>
          </Form.Field>
        </Form>


      </div>
    );
  }
}
export default BPJSValidation;