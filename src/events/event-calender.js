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
        'start': new Date(2017,10,20,9,0,0),
        'end': new Date(2017,10,20,13,0,0),
        'tempat': 'Poliklinik Cisitu',
        'penyelenggara': 'Unit Kesehatan Sukamaju',
        'waktu': '9.00 - 13.00',
        'biaya': 'Rp10.000,00'
    },
    {
        'title': 'Penyuluhan Keluarga Berencana',
        'start': new Date(2017,10,22,8,0,0),
        'end': new Date(2017,10,22,14,0,0),
        'tempat': 'Poliklinik Tubagus Ismail',
        'penyelenggara': 'Politeknik Bandung',
        'waktu': '8.00 - 14.00',
        'biaya': 'Rp50.000,00'
    },
    {
        'title': 'Penyuluhan Kebersihan Lingkungan',
        'start': new Date(2017,10,28,8,0,0),
        'end': new Date(2017,10,28,14,0,0),
        'tempat': 'Poliklinik Ganesha',
        'penyelenggara': 'PMI',
        'waktu': '8.00 - 14.00',
        'biaya': 'Gratis'
    },
    {
        'title': 'Vaksinasi Cacar Air',
        'start': new Date(2017,10,30,9,0,0),
        'end': new Date(2017,10,30,12,0,0),
        'tempat': 'Poliklinik Dipati Ukur',
        'penyelenggara': 'Unit Kesehatan Universitas Padjajaran',
        'waktu': '9.00 - 12.00',
        'biaya': 'Rp20.000,00'
    }
];

function Event({ event }) {
    return (
        <div>
            <h3>{event.title}</h3>
            <div>
                <b>Tempat</b> : { event.tempat }
            </div>
            <div>
                <b>Penyelenggara</b> : { event.penyelenggara }
            </div>
            <div>
                <b>Waktu</b> : { event.waktu }
            </div>
            <div>
                <b>Biaya</b> : { event.biaya }
            </div><br/>
            <div>Penjelasan lebih lanjut, klik <Link to="/penyuluhan">di sini</Link></div>
        </div>
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

                <Navbar name='Events'/>
                <br/>

                <Calender/>
            </div>
        );
    }
}
export default EventCalendar;