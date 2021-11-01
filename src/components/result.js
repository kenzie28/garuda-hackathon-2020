import React, {Component} from 'react';
import Banner from './Banner';
import Header from './Header';
import Classification1 from './classification1.png';
import Classification2 from './classification2.png';
import Classification5 from './classification3.png';
import {connect} from 'react-redux';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import './result.css';

export class Result extends Component {

    render () {
        let imgName = Classification1;
        
        return (
        <div>
            <img src={this.props.newEntry.classification} width='1000' className='diagnosis'/>
            <br/>

            <NavLink to="/anxiety-tips" className="link1">
                Quick Tips
            </NavLink>

            <NavLink to="/book-appointment" className="link2">
                Book an Appointment
            </NavLink>
            
            <NavLink to="/dashboard-summary" className="link3">
                Dashboard
            </NavLink>

        </div>



        )
    }
}


const mapStateToProps = state => ({
    newEntry: state.entry.newEntry
});

export default connect(mapStateToProps)(Result);