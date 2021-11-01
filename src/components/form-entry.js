import React, { Component } from 'react';
import { connect } from 'react-redux';
import StressEntry from './stress-entry';
import EnergyEntry from './energy-entry';
import ConcentrationEntry from './concentration-entry';
import SleepEntry from './sleep-entry';
import SleepQuantityEntry from './sleep-quantity-entry';
import MoodEntry from './mood-entry';
import Loading from './loading';
import NotesEntry from './notes-entry'

import ReviewEntry from './review-entry';
import Done from './done';
import Banner from './Banner';
import Header from './Header';

import StepZilla from 'react-stepzilla';

import './form-entry.css';
import './stepzilla.css';
import {addEntry} from "../actions";

export class FormEntry extends Component{

    saveEntry(step){
        if(step === 8) {
            this.props.dispatch(addEntry(this.props.newEntry));
        }
    }

    render() {
        const steps = [
            {name: 'Stress', component: <StressEntry/>},
            {name: 'Energy', component: <EnergyEntry/>},	           
            {name: 'Concentration', component: <ConcentrationEntry/>},	            
            {name: 'Sleep', component: <SleepEntry/>},	          
            {name: 'Diet', component: <SleepQuantityEntry/>},	//TODO
            {name: 'Mood', component: <MoodEntry/>},
            {name: 'Notes Entry', component: <NotesEntry/>},	         
            {name: 'Done!', component: <Done/>},
            {name: 'Heart Rate', component: <Loading/>}
        ]

        var today = new Date().toDateString();

        return (

            <section className="form-entry">

            <Header
            appName="mood today"
            currentUser="owais" />
            <Banner></Banner>

            <section>
                <h2 className='subheader'>Daily Entry For</h2>
                <h3 className='date'>{today}</h3>
            </section>

            <section className='step-progress'>
                <StepZilla
                    steps={steps}
                    prevBtnOnLastStep={false}
                    nextTextOnFinalActionStep={"Proceed"}
                    onStepChange={(step) => this.saveEntry(step)}
                />
            </section>

            </section>

        );
    }
}

const mapStateToProps = state => ({
   newEntry: state.entry.newEntry
});

export default connect(mapStateToProps)(FormEntry);
