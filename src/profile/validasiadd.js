import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/validateappointment.css';

class HapusRiwayat extends Component {

  render() {
    return (
      <div className='val-page'>
        <h1>Validasi Riwayat Penyakit</h1>
        <div class='validation'>
          <table className='val-table'>
            <tr>
              <td>Nama Penyakit:</td>
              <td>Sakit Hati</td> 
            </tr>
            <tr>
              <td>Tanggal Sakit:</td>
              <td>12 Oktober 2017</td> 
            </tr>
            <tr>
              <td>Durasi:</td>
              <td>3 bulan</td> 
            </tr>
            <tr>
              <td>Dokter:</td>
              <td>Dr. Alamson</td> 
            </tr>
            <tr>
              <td>Deskripsi:</td>
              <td>Sakit hati dikarenakan hati yang tidak kunjung memiliki pengisi yang tetap.</td> 
            </tr>
            <tr>
              <td>Anjuran:</td>
              <td>Segera mencari pengisi hati yang tetap</td> 
            </tr>
            <tr>
              <td>Tindak Lanjut:</td>
              <td>Bila sakit berlanjut hubungi dokter yang bersangkutan.</td> 
            </tr>
          </table>
        </div>
        <h1> Apakah anda yakin menambahkan riwayat penyakit ini? </h1>
        <h6> Pilih 'kembali' untuk mengubah riwayat penyakit </h6>
        <h6> Pilih 'ya' untuk menyimpan riwayat penyakit </h6>
        <Form className='valid-form' action='/profile'>
          <div class='flex-end'>
            <Button href='addriwayat' className='no-button'>Kembali</Button>
            <Button type='profile' primary className='ok-button'>Ya</Button>
          </div>
        </Form>
      </div>
    );
  }

 }
export default HapusRiwayat;