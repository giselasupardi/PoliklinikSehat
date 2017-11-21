import React, { Component } from 'react';
import { Table, Form, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import './css/jadwaldokter.css';

class JadwalDokter extends Component {
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
					DOKTER
				</a></td>
				<td><a href='/jadwal-tanggal' className="focus">
					TANGGAL
				</a></td>
			</tr>
		</table>

		<Form className='select'>
	        <select name="dokter">
              <option value="template" disabled selected>Pilih dokter</option>
	          <option value="1">dr. Antis Akit</option>
	          <option value="2">dr. Jang An Pil Ih</option>
	          <option value="3">dr. Kuatdan Pintar</option>
	          <option value="4">dr. Pastisehat Lah</option>
	          <option value="5">dr. Sayno Tosakit</option>
	          <option value="6">dr. Se Nyum Trus</option>
	        </select>
	    </Form>

	    <div className='table'>
	      <Table celled className='the-table tab4'>
	        <Table.Header>
	          <Table.Row>
	            <Table.HeaderCell>Senin</Table.HeaderCell>
	            <Table.HeaderCell>Selasa</Table.HeaderCell>
	            <Table.HeaderCell>Rabu</Table.HeaderCell>
	            <Table.HeaderCell>Kamis</Table.HeaderCell>
	          </Table.Row>
	        </Table.Header>

	        <Table.Body>

	          <Table.Row>
	            <Table.Cell>07.00 - 11.00</Table.Cell>
	            <Table.Cell></Table.Cell>
	            <Table.Cell>08.00 - 11.00</Table.Cell>
	            <Table.Cell>07.00 - 11.00</Table.Cell>
	          </Table.Row>
	          <Table.Row>
	            <Table.Cell>13.00 - 18.00</Table.Cell>
	            <Table.Cell></Table.Cell>
	            <Table.Cell>13.00 - 18.00</Table.Cell>
	            <Table.Cell>13.00 - 17.00</Table.Cell>
	          </Table.Row>
	          <Table.Row>
	            <Table.Cell>19.30 - 21.00</Table.Cell>
	            <Table.Cell></Table.Cell>
	            <Table.Cell>19.30 - 22.00</Table.Cell>
	            <Table.Cell></Table.Cell>
	          </Table.Row>
	        </Table.Body>
		  </Table>
		</div>
	    <div className='table'>
	      <Table celled className='the-table tab3'>
	        <Table.Header>
	          <Table.Row>
	            <Table.HeaderCell>Jumat</Table.HeaderCell>
	            <Table.HeaderCell>Sabtu</Table.HeaderCell>
	            <Table.HeaderCell>Minggu</Table.HeaderCell>
	          </Table.Row>
	        </Table.Header>

	        <Table.Body>

	          <Table.Row>
	            <Table.Cell>07.00 - 10.00</Table.Cell>
	            <Table.Cell></Table.Cell>
	            <Table.Cell>08.00 - 11.00</Table.Cell>
	          </Table.Row>
	          <Table.Row>
	            <Table.Cell>13.30 - 18.00</Table.Cell>
	            <Table.Cell></Table.Cell>
	            <Table.Cell>13.00 - 16.00</Table.Cell>
	          </Table.Row>
	          <Table.Row>
	            <Table.Cell>19.30 - 21.00</Table.Cell>
	            <Table.Cell></Table.Cell>
	            <Table.Cell></Table.Cell>
	          </Table.Row>
	        </Table.Body>
		  </Table>
		</div>
	  </div>

      </div>
    );
  }
}
export default JadwalDokter;