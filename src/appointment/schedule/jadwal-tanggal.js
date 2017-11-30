import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../../navbar';
import '../../css/jadwaldokter.css';

class JadwalTanggal extends Component {

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
      <div>
      
      <Navbar name='Janji Dokter'/>
      <br/>
      <br/>
      <div className='jadwaldokter-page'>
      	<div className='head'>
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
				<td><a href='/jadwal-dokter' className="focus">
					<Button className='menu-jadwal-button'>	
						DOKTER
					</Button>
				</a></td>
				<td><a href='/jadwal-tanggal' className="focus">
					<Button className='menu-jadwal-button'>					
						TANGGAL					
					</Button>
				</a></td>
			</tr>
		</table>

		<Form className='select'>
		<div className="flex-end">
			<span className="txt-pilih-tgl">Pilih tanggal:</span>
	        <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}/>
        </div>
	    </Form><br/>

	    <table className='tabel-spesialisasi-dokter th-cornflowerblue'>
	    	<thead>
	    		<th> Dokter </th>
	    		<th> Spesialis </th>
	    		<th> Kode </th>
	    	</thead>
	    	<tbody>
	    		<td> dr. Antis Akit </td>
	    		<td> Mata </td>
	    		<td className="bg-green">d1</td>
	    	</tbody>
	    	<tbody>
	    		<td> dr. Jang An Pil Ih </td>
	    		<td> Internis </td>
	    		<td className="bg-orange">d2</td>
	    	</tbody>
	    	<tbody>
	    		<td> dr. Kuatdan Pintar </td>
	    		<td> THT </td>
	    		<td className="bg-blue">d3</td>
	    	</tbody>
	    	<tbody>
	    		<td> dr. Pastisehat Lah </td>
	    		<td> Internis </td>
	    		<td className="bg-yellow">d4</td>
	    	</tbody>
	    	<tbody>
	    		<td> dr. Sayno Tosakit </td>
	    		<td> Saraf </td>
	    		<td className="bg-pink">d5</td>
	    	</tbody>
	    	<tbody>
	    		<td> dr. Se Nyum Trus </td>
	    		<td> Gigi </td>
	    		<td className="bg-aqua">d6</td>
	    	</tbody>
	    </table>

	    <div>
			<table className="jadwal-per-tanggal th-cornflowerblue">
				<thead>
					<th>Waktu</th>
					<th>d1</th>
					<th>d2</th>
					<th>d3</th>
					<th>d4</th>
					<th>d5</th>
					<th>d6</th>
				</thead>
				<tbody>
					<tr>
						<td>07.00</td>
						<td className=''></td>
						<td className='bg-orange'></td>
						<td className=''></td>
						<td className='bg-yellow'></td>
						<td className='bg-pink'></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>08.00</td>
						<td className=''></td>
						<td className='bg-orange'></td>
						<td className=''></td>
						<td className='bg-yellow'></td>
						<td className='bg-pink'></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>09.00</td>
						<td className=''></td>
						<td className='bg-orange'></td>
						<td className=''></td>
						<td className='bg-yellow'></td>
						<td className='bg-pink'></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>10.00</td>
						<td className='bg-green'></td>
						<td className='bg-orange'></td>
						<td className=''></td>
						<td className='bg-yellow'></td>
						<td className='bg-pink'></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>11.00</td>
						<td className='bg-green'></td>
						<td className='bg-orange'></td>
						<td className=''></td>
						<td className='bg-yellow'></td>
						<td className=''></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>12.00</td>
						<td className='bg-green'></td>
						<td className='bg-orange'></td>
						<td className=''></td>
						<td className='bg-yellow'></td>
						<td className=''></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>13.00</td>
						<td className=''></td>
						<td className=''></td>
						<td className=''></td>
						<td className=''></td>
						<td className='bg-pink'></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>14.00</td>
						<td className='bg-green'></td>
						<td className=''></td>
						<td className=''></td>
						<td className=''></td>
						<td className='bg-pink'></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>15.00</td>
						<td className='bg-green'></td>
						<td className=''></td>
						<td className=''></td>
						<td className=''></td>
						<td className='bg-pink'></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>16.00</td>
						<td className='bg-green'></td>
						<td className='bg-orange'></td>
						<td className=''></td>
						<td className=''></td>
						<td className='bg-pink'></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>17.00</td>
						<td className='bg-green'></td>
						<td className='bg-orange'></td>
						<td className=''></td>
						<td className=''></td>
						<td className='bg-pink'></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>18.00</td>
						<td className=''></td>
						<td className='bg-orange'></td>
						<td className=''></td>
						<td className=''></td>
						<td className=''></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>19.00</td>
						<td className=''></td>
						<td className='bg-orange'></td>
						<td className=''></td>
						<td className=''></td>
						<td className='bg-pink'></td>
						<td className=''></td>
					</tr>
					<tr>
						<td>20.00</td>
						<td className=''></td>
						<td className='bg-orange'></td>
						<td className=''></td>
						<td className=''></td>
						<td className='bg-pink'></td>
						<td className=''></td>
					</tr>
				</tbody>
			</table>
		</div>
	  </div>

      </div>
    );
  }
}
export default JadwalTanggal;