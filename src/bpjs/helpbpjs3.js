import React, { Component } from 'react';
import {Grid, Icon, Button} from 'semantic-ui-react';
import {Link } from "react-router-dom";

import Navbar from '../navbar';
import '../css/helpbpjs.css';

class BPJSHelper3 extends Component {

  render() {

    return (
      <div>
        <Navbar name="Status BPJS"/>
      <div className='instruction-div'>

        <Grid>
          <Grid.Row>
            <Grid.Column width={3} className='arrow'>
              <Link to='/helpbpjs/next'>
              <Icon name='chevron left' size='big'/>
              </Link>
            </Grid.Column>
            <Grid.Column width={10}>
              <p> 
                <b>Cara Mendaftar BPJS Secara Online<br/><br/></b>
                1. Buka halaman website https://daftar.bpjs-kesehatan.go.id/bpjs-online/<br/>
                2. Isi Form Pendaftaran Online.<br/>
                3. Simpan data Anda serta tunggu email notifikasi nomor registrasi di email anda.<br/>
                   Setelah Anda dapatkan notifikasinya, print lembar Virtual Account tersebut.<br/>
                4. Lakukan pembayaran di Bank yang telah ditunjuk.<br/>
                5. Anda akan mendapat email berupa E-Id Card BPJS.<br/>
                6. Anda dapat melakukan print kartu BPJS di kantor cabang BPJS terdekat.<br/>
              </p>
            </Grid.Column>
            <Grid.Column width={3} className='arrow'>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className='button'>
            <a href ='https://www.cermati.com/artikel/cara-daftar-bpjs-kesehatan-seperti-apa-prosesnya'>
              <Button primary floated='left'> For More Information </Button>
            </a>
            <Link to='/bpjsvalidation'>
              <Button negative className='backbutton' floated='right'> Back</Button>
            </Link>
        </div>
      </div>
            </div>
    );
  }
}
export default BPJSHelper3;