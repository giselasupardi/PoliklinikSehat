import React, {Component} from 'react';
import { Icon, Grid } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import Navbar from "../navbar";
import moment from 'moment';
import '../css/penyuluhan.css';

class Penyuluhan extends Component {
    constructor (props) {
        super(props);
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
            <Navbar name='Jadwal Kegiatan'/>
            <br/><br/>
                <Grid className='penyuluhan'>
                    <Grid.Row className='penyuluhan-title'>
                        <Grid.Column mobile={16} textAlign='center'>
                            <h2>Vaksinasi Polio</h2>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className='penyuluhan-content'>
                        <Grid.Column textAlign='right' mobile={6} tablet={7} computer={7}>
                            <Icon link name='marker' size='huge' color="orange"/>
                        </Grid.Column>
                        <Grid.Column mobile={10} tablet={9} computer={9}>
                            <div className="penyuluhan-detail">Poliklinik Cisitu</div>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='penyuluhan-content'>
                        <Grid.Column textAlign='right' mobile={6} tablet={7} computer={7}>
                            <Icon link name='clock' size='huge' color="orange"/>
                        </Grid.Column>
                        <Grid.Column mobile={10} tablet={9} computer={9}>
                            <div className="penyuluhan-detail">Pukul 9.00 - 11.00</div>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='penyuluhan-content'>
                        <Grid.Column textAlign='right' mobile={6} tablet={7} computer={7}>
                            <Icon link name='user' size='huge' color="orange"/>
                        </Grid.Column>
                        <Grid.Column mobile={10} tablet={9} computer={9}>
                            <div className="penyuluhan-detail">Politeknik UNPAD</div>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='penyuluhan-content'>
                        <Grid.Column textAlign='right' mobile={6} tablet={7} computer={7}>
                            <Icon link name='money' size='huge' color="orange"/>
                        </Grid.Column>
                        <Grid.Column mobile={10} tablet={9} computer={9}>
                            <div className="penyuluhan-detail">Rp10.000,00</div>

                        </Grid.Column>
                    </Grid.Row>
                    <br/>
                    <br/>
                    <br/>
                    <Grid.Row className='penyuluhan-title'>
                        <Grid.Column mobile={16} textAlign="center">
                            <h4>Acara ini bersifat eventual dan terbatas, hubungi:</h4>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='penyuluhan-content'>
                        <Grid.Column textAlign='right' mobile={4} tablet={7} computer={7}>
                            <Icon link name='phone' size='big'/>
                        </Grid.Column>
                        <Grid.Column mobile={12} tablet={9} computer={9}>
                            <div>081512983982</div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="back-button">
                        <Grid.Column textAlign="right" mobile={16} tablet={16}>
                            <NavLink to='/events' activeClassName="active">
                                <Icon link name='arrow circle left' size='big'/>
                            </NavLink>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        );
    }
}

export default Penyuluhan;