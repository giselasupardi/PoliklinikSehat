import React, { Component } from 'react';
import { Table, Form, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './navbar';
import './css/jadwaldokter.css';

class JadwalHari extends Component {

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
      
      <Navbar/>
      <br/>
      <br/>
      <div className='jadwaldokter-page'>
      	<div className='head'>
	      <Link to='/make-appointment-filled'>
	      	<Icon name='arrow circle left' color='grey' size='big' />
	      </Link>
	      <span className='notice'>
	      	Jadwal hari biasa. Untuk libur Nasional, diberlakukan jadwal khusus.
	      </span>
		</div>
		<br/>

		<table className='menu-table'>
			<tr>
				<td colspan="2">Jadwal berdasarkan...</td>
			</tr>
			<tr>
				<td><a href='/jadwal-dokter' className="focus">
					DOKTER
				</a></td>
				<td><a href='/jadwal-hari' className="focus">
					HARI
				</a></td>
			</tr>
		</table>

		<Form className='select'>
		<div className="flex-end">
			<span className="txt-pilih-tgl">Pilih tanggal yang diinginkan:</span>
	        <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}/>
        </div>
	    </Form>

	    <div className='table'>
	      <Table celled className='the-table tab4'>
	        <Table.Header>
	          <Table.Row>
	            <Table.HeaderCell>dr. Sayno Tosakit</Table.HeaderCell>
	            <Table.HeaderCell>dr. Pastisehat Lah</Table.HeaderCell>
	            <Table.HeaderCell>dr. Kuatdan Pintar</Table.HeaderCell>
	            <Table.HeaderCell>dr. Mung Kin Sehat</Table.HeaderCell>
	          </Table.Row>
	        </Table.Header>

	        <Table.Body>

	          <Table.Row>
	            <Table.Cell>08.00</Table.Cell>
	            <Table.Cell>08.00</Table.Cell>
	            <Table.Cell>08.00</Table.Cell>
	            <Table.Cell>10.00</Table.Cell>
	          </Table.Row>
	          <Table.Row>
	            <Table.Cell>08.20</Table.Cell>
	            <Table.Cell>08.40</Table.Cell>
	            <Table.Cell>08.40</Table.Cell>
	            <Table.Cell>17.00</Table.Cell>
	          </Table.Row>
	          <Table.Row>
	            <Table.Cell>09.30</Table.Cell>
	            <Table.Cell>09.15</Table.Cell>
	            <Table.Cell>10.00</Table.Cell>
	            <Table.Cell>-</Table.Cell>
	          </Table.Row>
	        </Table.Body>
		  </Table>
		</div>
	    <div className='table'>
	      <Table celled className='the-table tab4'>
	        <Table.Header>
	          <Table.Row>
	            <Table.HeaderCell>dr. Tono</Table.HeaderCell>
	            <Table.HeaderCell>dr. Tini</Table.HeaderCell>
	            <Table.HeaderCell>dr. Tunu</Table.HeaderCell>
	            <Table.HeaderCell>dr. Tana</Table.HeaderCell>
	          </Table.Row>
	        </Table.Header>

	        <Table.Body>

	          <Table.Row>
	            <Table.Cell>08.00</Table.Cell>
	            <Table.Cell>08.00</Table.Cell>
	            <Table.Cell>08.00</Table.Cell>
	            <Table.Cell>08.00</Table.Cell>
	          </Table.Row>
	          <Table.Row>
	            <Table.Cell>08.20</Table.Cell>
	            <Table.Cell>08.40</Table.Cell>
	            <Table.Cell>08.40</Table.Cell>
	            <Table.Cell>-</Table.Cell>
	          </Table.Row>
	          <Table.Row>
	            <Table.Cell>09.30</Table.Cell>
	            <Table.Cell>09.15</Table.Cell>
	            <Table.Cell>10.00</Table.Cell>
	            <Table.Cell>-</Table.Cell>
	          </Table.Row>
	        </Table.Body>
		  </Table>
		</div>
	  </div>

      </div>
    );
  }
}
export default JadwalHari;