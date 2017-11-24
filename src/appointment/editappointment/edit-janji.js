import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Navbar from '../../navbar';
import '../../css/editjanji.css';

class EditJanji extends Component {

  render() {
    return (
      <div className='container'>
        <Navbar name='Appointment'/>
        <div class="edit-page">
          <div class="search-bar">

          </div>
          <div class='appointments'>
            <table className='edit-table'>
              <tr>
                <td>Romeo Uno</td>
                <td>                  
                  <Link to='/under-construction'>
                    <Icon name='info circle' size='large' color='green'/>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Konsultasi sakit maag</td> 
                <td>                  
                  <Link to='/editing'>
                    <Icon name='pencil' size='large' color='yellow'/>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>30 Desember 2017 | 15.30</td> 
                <td>           
                  <span>
                    <Icon name='trash' size='large' color='red' />
                  </span>
                </td>
              </tr>
              <tr>
                <td>dr. Pastisehat Lah</td> 
              </tr>
            </table>
          </div>
          <div class='appointments'>
            <table className='edit-table'>
              <tr>
                <td>Rolly Polly Olly</td> 
                <td>                  
                  <Link to='/under-construction'>
                    <Icon name='info circle' size='large' color='green'/>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Sakit hari dan baper berkepanjangan</td> 
                <td>                  
                  <Link to='/editing'>
                    <Icon name='pencil' size='large' color='yellow'/>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>4 April 2099 | 10.20</td> 
                <td>           
                  <a href="/under-construction">       
                    <Icon name='trash' size='large' color='red'/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>dr. Sayno Tosakit</td> 
              </tr>
            </table>
          </div>
          <div class='appointments'>
            <table className='edit-table'>
              <tr>
                <td>Rolly Polly Olly</td> 
                <td>                  
                  <Link to='/under-construction'>
                    <Icon name='info circle' size='large' color='green'/>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Check-Up</td> 
                <td>                  
                  <Link to='/editing'>
                    <Icon name='pencil' size='large' color='yellow'/>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>31 Maret 2199 | 13.30</td> 
                <td>           
                  <a href="/under-construction">       
                    <Icon name='trash' size='large' color='red'/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>dr. Mung Kin Sehat</td> 
              </tr>
            </table>
          </div>

        </div>
      </div>
    );
  }

 }
export default EditJanji;