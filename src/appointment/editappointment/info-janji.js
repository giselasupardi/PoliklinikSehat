import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import '../../css/validateappointment.css';

class InfoJanji extends Component {

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
              <td>Laki-laki</td> 
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
              <td>dr. Pastisehat Lah - Internis</td> 
            </tr>
            <tr>
              <td>Waktu</td>
              <td>:</td>
              <td>15.00</td> 
            </tr>
          </table>
        </div>
        <br/>
        <div class='fullwidth text-center'>
          <Button href='edit-janji' color='red'>Kembali</Button>
        </div>
      </div>
    );
  }

 }
export default InfoJanji;