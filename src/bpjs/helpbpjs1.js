import React, { Component } from 'react';
import {Grid, Icon, Button} from 'semantic-ui-react'
import {Link } from "react-router-dom";
import Navbar from '../navbar';
import '../css/helpbpjs.css';

class BPJSHelper1 extends Component {

  render() {

    return (
      <div>
        <Navbar name="Status BPJS"/>
        <div className='instruction-div'>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3} className='arrow'>
              </Grid.Column>
              <Grid.Column width={10}>
                <p> 
                 <b> Dokumen-dokumen yang harus disiap sebelum mendaftar : <br/><br/></b>
                  1. Kartu identitas yang masih berlaku (KTP, SIM, Atau Paspor ) <br/>
                  2. Kartu Keluarga Atau KK terbaru <br/>
                  3. Buku nikah bagi yang sudah menikah <br/>
                  4. Fotocopy buku tabungan Sebagai penanggung biaya <br/>
                  5. Pas Foto ukuran 3×4 sebanyak 2 Lembar <br/>
                </p>
              </Grid.Column>
              <Grid.Column width={3} className='arrow'>
                <Link to='/helpbpjs/next'>
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
export default BPJSHelper1;