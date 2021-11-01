import React, {Component} from 'react';
import Banner from './Banner';
import Header from './Header';
import DashboardSummary from './dashboard-summary'
import './therapist.css';
import Typography from '@material-ui/core/Typography';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
// options
const options = [
    'Owais Kerney', 'Kenzie Mihardja', 'Mazel Mihardja', 'Preya Shah'
]

const defaultOption = options[0]

export class Therapist extends Component {
    setValues = selectValues => this.setState({ selectValues });

    render () {
        return (

        <div>
            <Header
                appName="mood today"
                currentUser="owais" />
            <Banner></Banner>
            <h1 className='view'>THERAPIST VIEW</h1>
            <h2 className='welcome'>Welcome, Dr. Arrie Anhari</h2>
            <h3 className='select'>
                Select a patient: 
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" className='dropdown'/>
            </h3>
            
            <br/>
            <br/>

            <DashboardSummary name='Owais Kerney'/>

        </div>
        )
    }
}

export default function Therapist() {
    return (<Therapist/>)
}