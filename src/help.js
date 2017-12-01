import React, { Component } from 'react';
import { Icon, Modal, Button } from 'semantic-ui-react';
import './css/confirmdelete.css';

class Help extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {

    return (
      <Modal trigger={<a onClick={this.handleOpen}> <Icon name='help circle' size='large'/></a>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Bantuan</Modal.Header>
        <Modal.Content>
          <Modal.Description className='modal-text'>
            <ul>
              <li>Halaman Status BPJS:<br/>
                Pada halaman ini, bagi Anda yang telah memiliki kartu BPJS dapat melihat status BPJS Anda untuk beberapa bulan terakhir.
                Bagi Anda yang ingin mendaftarkan diri untuk ikut program BPJS, Anda juga dapat melihat caranya pada fitur ini.
              </li>
              <li>Halaman Janji Dokter:<br/>
                Pada halaman ini Anda dapat membuat janji pertemuan dengan dokter di poliklinik, melihat jadwal dokter,
                serta melihat janji yang telah Anda buat sebelumnya. Selain itu Anda juga dapat melakukan pengubahan atau penghapusan janji.
              </li>
              <li>Halaman Events:<br/>
                Pada halaman ini Anda dapat melihat publikasi kegiatan di poliklinik. Jadwal disediakan dalam beberapa pilihan tampilan yang
                diharapkan dapaat memudahkan Anda untuk mencocokkan jadwal dengan kegiatan-kegiatan di poliklinik ini.
              </li>
              <li>Halaman Profile:<br/>
                Pada halaman ini Anda dapat mengatur profil Anda yang akan menjadi data pada database kami.
                Selain itu Anda juga dapat menambahkan, melihat, dan menghapus riwayat penyakit Anda.
              </li>
            </ul>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            OK
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

 }
export default Help;