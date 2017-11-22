import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './css/addriwayat.css';
import { NavLink } from "react-router-dom";
import back from './resources/images/back.png';

class AddRiwayat extends Component {

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
        <div class='form-content'>
        <Form className='makeapp-form'>
        <NavLink to='/profile' activeClassName="active"><img src={back} height="25" width="25" align="left"/></NavLink>
        <h1> Tambah Daftar Riwayat </h1>
        <table className='add-table'>
        <tr>
            <td align='left'> Nama Penyakit :</td>
            <td colspan='2' width='60%' text-align='right'>
                <input class="fullwidth" required />
            </td>
          </tr>
        <tr>
            <td align='left'> Tanggal Sakit :</td>
            <td colspan='2' width='60%' text-align='right'>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}/>
            </td>
        </tr>
        <tr>
            <td align='left'> Durasi Sakit :</td>
            <td colspan='2' width='60%' text-align='right'>
                <input class="fullwidth" required />
            </td>
          </tr>
          <tr>
            <td align='left'> Dokter :</td>
            <td colspan='2' width='60%' text-align='right'>
                <input class="fullwidth" required />
            </td>
          </tr>
          <tr>
            <td align='left'> Deskripsi :</td>
            <td colspan='2' width='60%' text-align='right'>
                <textarea name="deskripsi" placeholder="Deskripsi"></textarea>
            </td>
          </tr>
          <tr>
            <td align='left'> Anjuran :</td>
            <td colspan='2' width='60%' text-align='right'>
                <textarea name="anjuran" placeholder="Anjuran"></textarea>
            </td>
          </tr>
          <tr>
            <td align='left'> Tindak Lanjut :</td>
            <td colspan='2' width='60%' text-align='right'>
                <textarea name="anjuran" placeholder="Anjuran"></textarea>
            </td>
          </tr>
          <tr>
            <td align='left'> Obat :</td>
            <td colspan='2' width='60%' text-align='right'>
                <textarea name="anjuran" placeholder="Anjuran"></textarea>
            </td>
          </tr>
          </table>
        </Form>
        <div class='flex-end'>
            <Button href='make-appointment' className='no-button'>Reset All</Button>
        <NavLink to='/profile' activeClassName="active">    
        <Button type='submit' primary className='ok-button'>
                            Send
                        </Button>
                        </NavLink>
          </div>
        </div>
      </div>
    );
  }

 }
export default AddRiwayat;