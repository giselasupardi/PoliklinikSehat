import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import Home from './home';
import Register from './register';
import Login from './login';
import StatusBPJS from './statusbpjs';
import BPJSValidation from './bpjsvalidation';
import BPJSHelper1 from './helpbpjs1';
import BPJSHelper2 from './helpbpjs2';
import BPJSHelper3 from './helpbpjs3';
import EventCalender from './event-calender';
import Appointment from './appointment';
import MakeAppointment from './make-appointment';
import MakeAppointmentFilled from './make-appointment-filled';
import ValidateAppointment from './validate-appointment';
import JadwalDokter from './jadwal-dokter';
import JadwalTanggal from './jadwal-tanggal';
import EditJanji from './edit-janji';
import UnderCons from './under-construction';
import Editing from './editing';
import Profile from './profile';
import AddRiwayat from './addriwayat';
import HapusRiwayat from './hapusriwayat';
import Penyuluhan from './events/penyuluhan';

ReactDOM.render(
  <BrowserRouter>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/bpjsvalidation" component={BPJSValidation} />
        <Route exact path="/statusbpjs" component={StatusBPJS} />
        <Route exact path="/helpbpjs/first" component={BPJSHelper1} />
        <Route exact path="/helpbpjs/next" component={BPJSHelper2} />
        <Route exact path="/helpbpjs/last" component={BPJSHelper3} />
        <Route exact path="/appointment" component={Appointment} />        
        <Route exact path="/make-appointment" component={MakeAppointment} />
        <Route exact path="/make-appointment-filled" component={MakeAppointmentFilled} />
        <Route exact path="/validate-appointment" component={ValidateAppointment} />
        <Route exact path="/jadwal-dokter" component={JadwalDokter} />
        <Route exact path="/jadwal-tanggal" component={JadwalTanggal} />
        <Route exact path="/edit-janji" component={EditJanji} />
        <Route exact path="/under-construction" component={UnderCons} />
        <Route exact path="/editing" component={Editing} />
        <Route exact path="/events" component={EventCalender} />
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/addriwayat" component={AddRiwayat}/>
        <Route exact path="/hapusriwayat" component={HapusRiwayat}/>
        <Route exact path="/penyuluhan" component={Penyuluhan}/>
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
