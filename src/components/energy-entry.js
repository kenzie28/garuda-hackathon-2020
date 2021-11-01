import React, { Component } from 'react';
import { connect } from 'react-redux';
import Energy from './energy.png';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import DiscreteSlider from './slider.js';

import '@progress/kendo-theme-default/dist/all.css';


// To include the default styles
import 'react-rangeslider/lib/index.css'


import './mood-entry.css';

export class EnergyEntry extends Component {

  render() {
    const type = "energy";
    return (
      
        <div class="overall_mood">
        <div class="div3">
        <div className="card">
          <img src={Energy} width="150" style={{alignSelf: 'center', paddingBottom: 20}}/>
          <h3>How was your energy level throughout the day?</h3>
          <h6 style={{paddingBottom:'40px'}}><em>(1 being very low and 10 being very high)</em></h6>
          <DiscreteSlider
            dispatch = {this.props.dispatch}
            type = {type}
          />

        </div>
        </div>
        </div>
      
    );
  }
}

const mapStateToProps = state => ({
  energy: state.entry.newEntry.energy,
});

export default connect(mapStateToProps)(EnergyEntry);
