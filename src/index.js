import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import Home from './home';
import * as Session from './session/export';
import * as BPJS from './bpjs/exportbpjs';
import * as Appointment from './appointment/export';
import * as Events from './events/export';
import * as Profile from './profile/export';
import UnderCons from './under-construction';

ReactDOM.render(
  <BrowserRouter>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Session.Register} />
        <Route exact path="/login" component={Session.Login} />
        <Route exact path="/bpjsvalidation" component={BPJS.BPJSValidation} />
        <Route exact path="/statusbpjs" component={BPJS.StatusBPJS} />
        <Route exact path="/helpbpjs/first" component={BPJS.BPJSHelper1} />
        <Route exact path="/helpbpjs/next" component={BPJS.BPJSHelper2} />
        <Route exact path="/helpbpjs/last" component={BPJS.BPJSHelper3} />
        <Route exact path="/appointment" component={Appointment.Appointment} />        
        <Route exact path="/make-appointment" component={Appointment.MakeAppointment} />
        <Route exact path="/make-appointment-filled" component={Appointment.MakeAppointmentFilled} />
        <Route exact path="/validate-appointment" component={Appointment.ValidateAppointment} />
        <Route exact path="/jadwal-dokter" component={Appointment.JadwalDokter} />
        <Route exact path="/jadwal-tanggal" component={Appointment.JadwalTanggal} />
        <Route exact path="/edit-janji" component={Appointment.EditJanji} />
        <Route exact path="/editing" component={Appointment.Editing} />
        <Route exact path="/under-construction" component={UnderCons} />
        <Route exact path="/events" component={Events.EventCalender} />
        <Route exact path="/penyuluhan" component={Events.Penyuluhan}/>
        <Route exact path="/profile" component={Profile.Profile}/>
        <Route exact path="/addriwayat" component={Profile.AddRiwayat}/>
        <Route exact path="/hapusriwayat" component={Profile.HapusRiwayat}/>
    </div>
  </BrowserRouter>
, document.getElementById('root'));

registerServiceWorker();
