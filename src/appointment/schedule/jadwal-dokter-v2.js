import React, { Component } from 'react';
import { Form, Icon, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Navbar from '../../navbar';
import '../../css/jadwaldokter.css';

class JadwalDokterWBack extends Component {
  render() {
    return (
      <div>
      <Navbar name='Janji Dokter'/>
      <br/>
      <br/>
      <div className='jadwaldokter-page'>
      	<div className='head'>
	      <Link to='/make-appointment-filled'>
	      	<Icon name='arrow circle left' color='grey' size='big' />
	      </Link>
	      <span className='notice'>
	      	Jadwal hari biasa. Untuk hari libur Nasional, diberlakukan jadwal khusus.
	      </span>
		</div>
		<br/>

		<table className='menu-table'>
			<tr>
				<td colspan="2">Jadwal berdasarkan...</td>
			</tr>
			<tr>
				<td><Link to='/jadwal-dokter-v2' className="focus">
					<Button className='menu-jadwal-button'>	
						DOKTER
					</Button>
				</Link></td>
				<td><Link to='/jadwal-tanggal-v2' className="focus">
					<Button className='menu-jadwal-button'>					
						TANGGAL					
					</Button>
				</Link></td>
			</tr>
		</table>

		<Form className='select'>
	        <select name="dokter">
              <option value="template" disabled selected>Pilih dokter</option>
	          <option value="1">dr. Antis Akit - Mata</option>
	          <option value="2">dr. Jang An Pil Ih - Internis</option>
	          <option value="3">dr. Kuatdan Pintar - THT</option>
	          <option value="4">dr. Pastisehat Lah - Internis</option>
	          <option value="5">dr. Sayno Tosakit - Saraf</option>
	          <option value="6">dr. Se Nyum Trus - Gigi</option>
	        </select>
	    </Form>

	    <div className='table'>
	    	 <table className="tabel-jadwal-dokter th-cornflowerblue">
			    <tr>
			        <th scope="col">Senin</th>
			    </tr>
			    <tr>
			        <td>07.00 - 11.00</td>
			    </tr>
			    <tr>
			        <td>13.00 - 18.00</td>
			    </tr>
			    <tr>
			        <td>19.00 - 21.00</td>
			    </tr>
			</table>

			<table className="tabel-jadwal-dokter th-cornflowerblue">
			    <tr>
			        <th scope="col">Selasa</th>
			    </tr>
			    <tr>
			        <td></td>
			    </tr>
			    <tr>
			        <td></td>
			    </tr>
			    <tr>
			        <td></td>
			    </tr>
			</table>

			<table className="tabel-jadwal-dokter th-cornflowerblue">
			    <tr>
			        <th scope="col">Rabu</th>
			    </tr>
			    <tr>
			        <td>08.00 - 11.00</td>
			    </tr>
			    <tr>
			        <td>13.00 - 18.00</td>
			    </tr>
			    <tr>
			        <td>19.00 - 21.00</td>
			    </tr>
			</table>

			<table className="tabel-jadwal-dokter th-cornflowerblue">
			    <tr>
			        <th scope="col">Kamis</th>
			    </tr>
			    <tr>
			        <td>07.00 - 11.00</td>
			    </tr>
			    <tr>
			        <td>13.00 - 17.00</td>
			    </tr>
			    <tr>
			        <td></td>
			    </tr>
			</table>

			<table className="tabel-jadwal-dokter th-cornflowerblue">
			    <tr>
			        <th scope="col">Jumat</th>
			    </tr>
			    <tr>
			        <td>07.00 - 10.00</td>
			    </tr>
			    <tr>
			        <td>14.00 - 18.00</td>
			    </tr>
			    <tr>
			        <td>19.00 - 21.00</td>
			    </tr>
			</table>

			<table className="tabel-jadwal-dokter th-cornflowerblue">
			    <tr>
			        <th scope="col">Sabtu</th>
			    </tr>
			    <tr>
			        <td></td>
			    </tr>
			    <tr>
			        <td></td>
			    </tr>
			    <tr>
			        <td></td>
			    </tr>
			</table>

			<table className="tabel-jadwal-dokter th-cornflowerblue">
			    <tr>
			        <th scope="col">Minggu</th>
			    </tr>
			    <tr>
			        <td>08.00 - 11.00</td>
			    </tr>
			    <tr>
			        <td>13.00 - 16.00</td>
			    </tr>
			    <tr>
			        <td></td>
			    </tr>
			</table>

		</div>
	  </div>

      </div>
    );
  }
}
export default JadwalDokterWBack;