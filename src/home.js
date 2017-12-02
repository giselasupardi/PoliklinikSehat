import React, { Component } from 'react';
import logo from './resources/images/logo.png';
import { Link } from "react-router-dom";
import {Image, Button, Modal} from 'semantic-ui-react';
import './css/home.css';

class Home extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  render() {
    return (
      <div className='session-container'>
        <div className='more-info'>
          About us | Language
        </div>

        <div className='welcome'>
          Welcome to
        </div>

        <Image src={logo} className='logo'/>

        <div className='license-agree'>
          Please kindly refer to our 
            <Modal trigger={<a onClick={this.handleOpen}> License and Agreement</a>}
              open={this.state.modalOpen}
              onClose={this.handleClose}
            >
              <Modal.Header>License and Agreement</Modal.Header>
              <Modal.Content>
                <Modal.Description className='modal-text'>
                  <p>Subject matter
                  <br/>

                  BIOLOGICAL MATERIALS: the materials supplied by HARVARD (identified in Appendix B) together
                   with any progeny, mutants, or derivatives thereof supplied by HARVARD or created by LICENSEE.
                  <br/><br/>
                  Summary of use(s)
                  <br/>
                  An exclusive commercial license under PATENT RIGHTS, and a license to use BIOLOGICAL
                   MATERIALS to make and have made, to use and have used, to sell and have sold the 
                   LICENSED PRODUCTS, and to practice the LICENSED PROCESSES, for the life of the PATENT 
                   RIGHTS.
                  <br/><br/>
                  Purpose or background
                  <br/>
                  LICENSEE is desirous of obtaining an exclusive license in the TERRITORY in order to 
                  practice the above-referenced invention covered by PATENT RIGHTS in the United States
                   and in certain foreign countries, and to manufacture, use and sell in the commercial
                    market the products made in accordance therewith, and HARVARD is desirous of granting
                     such a license to LICENSEE in accordance with the terms of this Agreement.
                  <br/><br/>
                  Contact details
                  <br/>
                  Harvard University Office for Technology and Trademark Licensing, Holyoke Center
                   727, 1350 Massachusettes Avenue, Cambridge, MA 02138, United States of America.
                  <br/>
                  E-mail: Puskemassehat@psehat.com
                  <br/>
                  Telephone: 08123456789; Fax: (617) 495 9568 </p>
                  <br/>
                                  <p>Subject matter
                  <br/>

                  BIOLOGICAL MATERIALS: the materials supplied by HARVARD (identified in Appendix B) together
                   with any progeny, mutants, or derivatives thereof supplied by HARVARD or created by LICENSEE.
                  <br/><br/>
                  Summary of use(s)
                  <br/>
                  An exclusive commercial license under PATENT RIGHTS, and a license to use BIOLOGICAL
                   MATERIALS to make and have made, to use and have used, to sell and have sold the 
                   LICENSED PRODUCTS, and to practice the LICENSED PROCESSES, for the life of the PATENT 
                   RIGHTS.
                  <br/><br/>
                  Purpose or background
                  <br/>
                  LICENSEE is desirous of obtaining an exclusive license in the TERRITORY in order to 
                  practice the above-referenced invention covered by PATENT RIGHTS in the United States
                   and in certain foreign countries, and to manufacture, use and sell in the commercial
                    market the products made in accordance therewith, and HARVARD is desirous of granting
                     such a license to LICENSEE in accordance with the terms of this Agreement.
                  <br/><br/>
                  Contact details
                  <br/>
                  Harvard University Office for Technology and Trademark Licensing, Holyoke Center
                   727, 1350 Massachusettes Avenue, Cambridge, MA 02138, United States of America.
                  <br/>
                  E-mail: Puskemassehat@psehat.com
                  <br/>
                  Telephone: 08123456789; Fax: (617) 495 9568 </p>
                  
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color='green' onClick={this.handleClose} inverted>
                  Got it
                </Button>
              </Modal.Actions>
            </Modal>
        </div>
        <div className='signbutton'>
          <Link to='/register'>
            <Button primary className='signup'> I Agree. Sign me up </Button>
          </Link>
        </div>
        <div className='haveaccount'>
          <Link to='/login'>
            <p className='signin'>Have an account?</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
