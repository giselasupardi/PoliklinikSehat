import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import './css/validateappointment.css';

class ValidateAppointment extends Component {

  render() {
    return (
      <div className='val-page'>
        <div class='validation'>
          <table className='val-table'>
            <tr>
              <td>Nama</td>
              <td>:</td>
              <td>Romeo Uno</td> 
            </tr>
            <tr>
              <td>No. Telp</td>
              <td>:</td>
              <td>0812345678</td> 
            </tr>
            <tr>
              <td>Usia</td>
              <td>:</td>
              <td>50 tahun</td> 
            </tr>
            <tr>
              <td>Gender</td>
              <td>:</td>
              <td>Pria</td> 
            </tr>
            <tr>
              <td>Tujuan</td>
              <td>:</td>
              <td>Konsultasi sakit maag</td> 
            </tr>
            <tr>
              <td>Tanggal</td>
              <td>:</td>
              <td>30 Desember 2017</td> 
            </tr>
            <tr>
              <td>Dokter</td>
              <td>:</td>
              <td>dr. Pastisehat Lah</td> 
            </tr>
            <tr>
              <td>Waktu</td>
              <td>:</td>
              <td>15.00</td> 
            </tr>
          </table>
        </div>
        <Form className='valid-form' action='/appointment'>
          <div class='flex-end'>
            <Button href='make-appointment-filled' className='no-button'>Salah</Button>
            <Button type='submit' primary className='ok-button'>Benar</Button>
          </div>
        </Form>
      </div>
    );
  }

 }
export default ValidateAppointment;