import React, {Component} from 'react';
import Banner from './Banner';
import Header from './Header';
import Asymptomatic from './classification1.png';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import AnxietyTip from './anxietytip.png';

import './Anxiety.css';

export class Anxiety extends Component {



    render () {
        return (
        <div>
            <Header
                appName="mood today"
                currentUser="owais" />
            <Banner></Banner>
            <img src={AnxietyTip} width='1000'/>

            <br/>
            <NavLink to="/result" className="link2">
                Back
            </NavLink>
        
        </div>

        )
    }
}



export default function Anxiety(props) {

    return <Anxiety/>
}