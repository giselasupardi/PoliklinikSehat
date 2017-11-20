import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './navbar';
import './css/makeappointment.css';

class MakeAppointmentFilled extends Component {

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
      <div className='container'>
        <Navbar/>
        <div className='maindiv'>
          <div className='form-content'>
          <Form className='makeapp-form' action='/validate-appointment'>
            <select name="app-method" className="fullwidth set-marginbottom" >
                <option value="template" disabled>Untuk siapa Anda mendaftar?</option>
                <option value="self" selected>Daftar untuk diri Anda</option>
                <option value="other">Daftar untuk orang lain</option>
            </select>

            <input placeholder='Nama Lengkap' className="fullwidth set-marginbottom" value="Romeo Uno" required />
            <input placeholder='Nomor yang dapat dihubungi' className="fullwidth" value="0812345678" required />
            <table className="app-table">
              <tr>
              <td className="usia">
                <input placeholder='Usia' className="fullwidth" value="50" required />
              </td>
              <td>
                <select name="jeniskelamin" className="jk">
                  <option value="template" disabled>Jenis Kelamin</option>
                  <option value="L" selected>Laki-laki</option>
                  <option value="P">Perempuan</option>
                </select>
              </td>
              </tr>
            </table>


            <textarea name="tujuan" placeholder="Tujuan pertemuan" className='tujuan' required>Konsultasi sakit maag</textarea>
            
            <table className='app-table'>
              <tr>
                <td>Pilih tanggal:</td>
                <td><DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}/>
                    </td> 
              </tr>
              <tr>
                <td><a href="/jadwal-dokter" className="link-jadwal">Lihat jadwal dokter</a></td>
                <td>
                  <select name="dokter">
                    <option value="template" disabled selected>Pilih dokter</option>
                    <option value="1">dr. Antis Akit</option>
                    <option value="2">dr. Jang An Pil Ih</option>
                    <option value="3">dr. Kuatdan Pintar</option>
                    <option value="4">dr. Pastisehat Lah</option>
                    <option value="5">dr. Sayno Tosakit</option>
                    <option value="6">dr. Se Nyum Trus</option>
                  </select>
                </td> 
              </tr>
              <tr>
                <td>Pilih waktu pertemuan</td>
                <td>
                  <select name="jamjanji">
                    <option value="template" disabled selected></option>
                    <option value="1">07.00</option>
                    <option value="2">08.00</option>
                    <option value="3">09.00</option>
                    <option value="4">10.00</option>
                    <option value="5">13.00</option>
                    <option value="6">14.00</option>
                    <option value="7">15.00</option>
                    <option value="8">16.00</option>
                    <option value="9">17.00</option>
                  </select></td> 
              </tr>
            </table>
            <div>
              <Button type='submit' primary className='app-button'>Buat Janji</Button>
            </div>
          </Form>
          </div>
        </div>
      </div>
    );
  }

 }
export default MakeAppointmentFilled;