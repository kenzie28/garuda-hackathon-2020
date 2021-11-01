import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sleep from './sleep.png';
//import { makeStyles } from '@material-ui/core/styles';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import DiscreteSlider from './slider.js';

import '@progress/kendo-theme-default/dist/all.css';


// To include the default styles
import 'react-rangeslider/lib/index.css'


import './mood-entry.css';

export class SleepEntry extends Component {

  render() {
    const type1 = "sleep_quality";
    const type2 = "sleep_quantity";
    return (
        <div class="overall_mood">
        <div class="div3">
        <div className="card">
          <img src={Sleep} width="150" style={{alignSelf: 'center', paddingBottom: 20}}/> 
          <h3>How would you rate your sleep quality?</h3>
          <h6 style={{paddingBottom:'40px'}}><em>(1 being poor and 10 being excellent)</em></h6>
          <DiscreteSlider
            dispatch = {this.props.dispatch}
            type = {type1}
          />

          <br/>
          <br/>
          <h3>How would you rate your sleep quantity?</h3>
          <h6 style={{paddingBottom:'40px'}}><em>(1 being too little or too much and 10 being perfectly enough)</em></h6>
          <DiscreteSlider
            dispatch = {this.props.dispatch}
            type = {type2}
          />

        </div>
        </div>
        </div>
      
    );
  }
}

const mapStateToProps = state => ({
  sleep_quality: state.entry.newEntry.sleep_quality,
  sleep_quantity: state.entry.newEntry.sleep_quantity
});

export default connect(mapStateToProps)(SleepEntry);
