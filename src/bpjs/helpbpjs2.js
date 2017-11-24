import React, { Component } from 'react';
import {Grid, Icon, Button} from 'semantic-ui-react';
import {Link } from "react-router-dom";
import Navbar from '../navbar';

import '../css/helpbpjs.css';

class BPJSHelper2 extends Component {

  render() {

    return (
      <div>
        <Navbar name="Status BPJS"/>
      <div className='instruction-div'>

        <Grid>
          <Grid.Row>
            <Grid.Column width={3} className='arrow'>
              <Link to='/helpbpjs/first'>
              <Icon name='chevron left' size='big'/>
              </Link>
            </Grid.Column>
            <Grid.Column width={10}>
              <p> 
                <b>Cara Mendaftar BPJS Secara Offline<br/><br/></b>
                1. Datangi kantor BPJS Kesehatan terdekat dari rumah Anda.  <br/>
                2. Sesampainya di kantor BPJS Kesehatan Anda akan diberikan form pendaftaran untuk diisi.  <br/>
                3. Setelah formulir sudah Anda isi, Anda akan diberi virtual account dimana nantinya akan bisa 
                    Anda gunakan sebagai media pembayaran maupun transfer dana klaim saat dibutuhkan. <br/>
                4. Lakukan pembayaran di Bank yang telah ditunjuk. <br/>
                5. Kembali ke kantor BPJS Kesehatan dengan menyerahkan bukti transfer,
                   lalu tunggu hingga kartu BPJS Anda selesai dicetak. <br/>
              </p>
            </Grid.Column>
            <Grid.Column width={3} className='arrow'>
              <Link to='/helpbpjs/last'>
              <Icon name='chevron right' size='big'/>
              </Link>
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
export default BPJSHelper2;