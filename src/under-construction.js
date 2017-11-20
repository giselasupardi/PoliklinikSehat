import React, {Component} from 'react';
import Navbar from './navbar';
import './css/us.css';

class UnderCons extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <br/><br/>
        <div className='us-page'>
          Sorry, we are still under construction
          <br/>:(
        </div>
      </div>
    );
  }
}

export default UnderCons;


