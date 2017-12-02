import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Icon} from 'semantic-ui-react';
import Navbar from '../navbar';
import '../css/appointment.css';

class Appointment extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar name='Janji Dokter'/>
        <br />
        <div className='welcometext'>
          <h2 className='welctext'>Selamat malam, Trundy</h2>
        </div>

        <div className='choosetext'>
          Apa yang ingin Anda lakukan hari ini?
        </div>
        <table class='appointment-table'>
            <tr>
              <td className='makejanji'>
                <Link to='/make-appointment'>
                  <button>
                    <Icon name='plus circle' size='huge' color='green'/>
                    <br/><br/>
                    Membuat janji
                  </button>
                </Link>
              </td>
              <td className='jadwal'>
               <Link to='/jadwal-dokter'>
                  <button>
                    <Icon name='list' size='huge' color='grey'/>
                    <br/><br/>
                    Melihat Jadwal Dokter
                  </button>
                </Link>
              </td> 
              <td className='editjanji'>
                <Link to='/edit-janji'>
                  <button>
                    <Icon name='pencil' size='huge' color='yellow'/>
                    <br/><br/>
                    Mengubah janji
                  </button>
                </Link>
              </td>
            </tr>
        </table>
      </div>
    );
  }
}

export default Appointment;