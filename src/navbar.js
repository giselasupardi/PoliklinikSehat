import React, {Component} from 'react';
import { Icon, Grid } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import Help from './help';
import './css/navbar.css';

class Navbar extends Component {

  render() {
    return (
      <Grid className='navbar'>        
        <Grid.Row className='navbarinformation'>
          <Grid.Column mobile={12} computer={12}>
            <h2 className='nav-text'>{this.props.name}</h2>
          </Grid.Column>
          <Grid.Column mobile={4} computer={4} textAlign='right'>
            <a href='under-construction'><Icon name='setting' size='large'/></a>
            <Help />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center' className='nav-icon'>
          <Grid.Column mobile={4} computer={4}>
            <NavLink to='/bpjsvalidation' activeClassName="active">
            <Icon link name='check square' size='big'/> <br/>
            <p class="statusbpjs">Status BPJS</p>
            </NavLink>
          </Grid.Column>
          <Grid.Column mobile={4} computer={4}>
           <NavLink to='/appointment' activeClassName="active">
            <Icon link name='doctor' size='big'/> <br/>
             <p class="janjidokter">Janji Dokter</p>
            </NavLink>
          </Grid.Column>
          <Grid.Column mobile={4} computer={4}>
           <NavLink to='/events' activeClassName="active">
            <Icon name='calendar' size='big'/> <br/>
               <p class="janjidokter">Kegiatan</p>
            </NavLink>
          </Grid.Column>
          <Grid.Column mobile={4} computer={4}>
           <NavLink to='/profile' activeClassName="active">
            <Icon name='user' size='big'/><br/>
               <p class="janjidokter">Profil</p>
            </NavLink>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Navbar;