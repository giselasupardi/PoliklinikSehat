import React, { Component } from 'react';
import logo from '../resources/images/johan.jpg';
import Navbar from '../navbar';
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import '../css/profile.css';

class Profile extends Component{
    render(){
        return(
            <div>
                <Navbar name='Profile'/>
                <br/>
                <div className='profile'>
                    <table className = 'profile-table'>
                    <tr>                
                        <td rowspan='2' align='left' width='15%'>
                            <img src={logo} className='profpict' alt="profile"/>
                        </td> 
                        <td align='left' width='75%'>
                            <b><font size='5'> Rolly Polly Olly </font></b>
                        </td>
                    </tr>
                    <tr>
                    <td><font size='5'> Polly </font></td>
                    </tr>
                    <tr>
                        <td align='center'>
                        <i class="call square icon"></i>08123456789
                        </td> 
                        <td align='center'>
                        <i class="birthday icon"></i>31/12/99
                        </td>
                        <td align='center'>
                        <i class="male icon"></i>
                        </td>
                    </tr>
                   </table>
                </div>
                <div className='profile'>
                <h3> Riwayat Penyakit </h3>
                    <table className = 'profile-table'>
                    <tr>
                        <NavLink to='/hapusriwayat' activeClassName="active"><td>Sakit Hati</td></NavLink>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>Rabies</td>
                        <td>2015</td>
                    </tr>
                    <tr>
                        <td>Sapi Gila</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>Flu Babi</td>
                        <td>2018</td>
                    </tr>
                    </table>
			{/*<Button type='submit' primary className='app-button' onChange='return validateDropdown(this);'>*/}
                    <div style={{'text-align':'center'}}>
                        <NavLink to='/addriwayat' activeClassName="active">
                            <Button color='green' className="fullwidth">Add</Button>
                        </NavLink>
                    </div>
                    {/*</Button>*/}
                    <table>
			<tr>
                            <td align='center'><font color="red"><i class="warning circle icon" color="red"></i>Klik riwayat untuk lihat lebih detail/hapus</font></td>
			</tr>	
                    </table>
		</div>
                </div>
            );
    }
}

export default Profile;
