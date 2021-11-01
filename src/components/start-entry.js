import React from 'react';
import {Link} from 'react-router-dom';
import './start-entry.css';

export default function StartEntry(props) {

    return (

        <div className="start-entry">

            <Link to="/form-entry" className="start-entry-link">Enter Mood for Today</Link>
            <Link to="/form-entry" className="start-entry-link">See my Summary</Link>
            <Link to="/form-entry" className="start-entry-link">Feeling Down</Link>
            <Link to="/form-entry" className="start-entry-link">Book an Appointment</Link>

        </div>

    );
}
