import React, { Component } from 'react';
import {Link} from "react-router-dom";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Navbar from '../navbar';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/calendar.css';

let eventArray = [
    {
        'title': 'Vaksinasi Polio',
        'start': new Date(2017,11,10,9,0,0),
        'end': new Date(2017,11,10,13,0,0),
        'tempat': 'Poliklinik Cisitu',
        'type': 'vaksinasi'
    },
    {
        'title': 'Penyuluhan Keluarga Berencana',
        'start': new Date(2017,11,12,8,0,0),
        'end': new Date(2017,11,12,14,0,0),
        'tempat': 'Poliklinik Tubagus Ismail',
        'type': 'penyuluhan'
    },
    {
        'title': 'Penyuluhan Kebersihan Lingkungan',
        'start': new Date(2017,11,6,8,0,0),
        'end': new Date(2017,11,6,14,0,0),
        'tempat': 'Poliklinik Ganesha',
        'type': 'penyuluhan'
    },
    {
        'title': 'Vaksinasi Cacar Air',
        'start': new Date(2017,11,4,9,0,0),
        'end': new Date(2017,11,4,12,0,0),
        'tempat': 'Poliklinik Dipati Ukur',
        'type': 'vaksinasi'
    }
];

function EventType(props){
    if(props.type === "penyuluhan"){
        return <i>Penjelasan lebih lanjut, klik <Link to="/penyuluhan" style={{'color':'blue'}}>di sini</Link></i>;
    } else {
        return <i>Penjelasan lebih lanjut, klik <Link to="/vaksinasi" style={{'color':'blue'}}>di sini</Link></i>;
    }
}

function Event({ event }) {
    return (
        <span style={{'font-size':'1.2rem'}}>
            <b>{event.title}</b><br/>
            <b>Tempat</b> : { event.tempat }<br/>
            <EventType type={event.type}/>
        </span>
    )
}

let createReactClass = require('create-react-class');
BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

let Calender = createReactClass({
    render(){
        return (
            <BigCalendar
                events={eventArray}
                defaultDate={new Date()}
                components={{
                    event: Event,
                }}
            />
        );
    }
});

class EventCalendar extends Component {

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
                <br/>
                <p style={{'text-align': 'center', 'padding': '5px', 'font-size':'1.2rem'}}>
                    <b>Selamat datang di jadwal kalender kegiatan!</b><br/>
                    Klik pada tanggal untuk melihat jadwal dengan lebih jelas.
                </p>

                <Calender/>
            </div>
        );
    }
}
export default EventCalendar;