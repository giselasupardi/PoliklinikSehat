import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../navbar';
import '../css/makeappointment.css';
import {Link} from 'react-router-dom';

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
        <Navbar name='Janji Dokter'/>
        <div className='maindiv'>
          <div className='form-content'>
          <Form className='makeapp-form' action='/validate-appointment'>
            <select name="app-method" className="fullwidth set-marginbottom" >
                <option value="template" disabled>Untuk siapa Anda mendaftar?</option>
                <option value="self" selected>Daftar untuk diri Anda</option>
                <option value="other">Daftar untuk orang lain</option>
            </select>
            <div className='input-w-span'>
              <span>Nama:</span>
              <input placeholder='Nama Lengkap' value="Romeo Uno" required />
            </div>
            <div className='input-w-span'>
              <span>Telepon:</span>
              <input placeholder='Nomor yang dapat dihubungi' value="0812345678" required />
            </div>
            <div className='input-w-span'>
              <span>Usia:</span>
              <input placeholder='Usia' value="50" required />
            </div>
            <div className='input-w-span'>
              <span>Gender:</span>
              <select name="jeniskelamin" className="jk">
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
            <div className='input-w-span'>
              <span className='tujuan'>Tujuan:</span>
              <textarea name="tujuan" placeholder="Tujuan pertemuan" className='tujuan' required>Konsultasi sakit maag</textarea>
            </div>
            
            <div className='input-w-bigspan'>
              <span>Pilih tanggal:</span>
              <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
            </div>

            <div className='input-w-bigspan'>
              <span><Link to="/jadwal-dokter-v2" className="link-jadwal">
                Lihat jadwal dokter
              </Link></span>
              <select name="dokter">
                <option value="template" disabled selected>Pilih dokter</option>
                <option value="1">dr. Antis Akit - Mata</option>
                <option value="2">dr. Jang An Pil Ih - Internis</option>
                <option value="3">dr. Kuatdan Pintar - THT</option>
                <option value="4">dr. Pastisehat Lah - Internis</option>
                <option value="5">dr. Sayno Tosakit - Saraf</option>
                <option value="6">dr. Se Nyum Trus - Gigi</option>
              </select>
            </div>

            <div className='input-w-bigspan'>
              <span>Pilih waktu:</span>
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
              </select>
            </div>

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