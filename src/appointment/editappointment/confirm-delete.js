import React, { Component } from 'react';
import { Icon, Modal, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import '../../css/confirmdelete.css';

class ConfirmDelete extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {

    return (
      <div className='modal-box'>
      <Modal trigger={<a onClick={this.handleOpen}> <Icon name='trash' color='red' size='large'/></a>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Konfirmasi Hapus Janji</Modal.Header>
        <Modal.Content>
          <Modal.Description className='modal-text text-center'>
            Apakah Anda yakin ingin menghapus janji pertemuan ini?
            <br/>
            Janji yang telah dihapus tidak dapat dikembalikan kecuali membuat ulang
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <a href='under-construction'><Button color='yellow' className='info-button-modal'>
            <div class='info-inside-modal'>
              <Icon name='info circle' color='white' size='big'/>
              <div>Detil<br/>janji</div>
            </div>
          </Button></a>
          <Button color='green' onClick={this.handleClose}>
            Kembali
          </Button>
          <Button color='red' onClick={this.handleClose} inverted>
            Hapus
          </Button>
        </Modal.Actions>
      </Modal>
      </div>
    );
  }

 }
export default ConfirmDelete;