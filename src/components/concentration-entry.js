import React, { Component } from 'react';
import { connect } from 'react-redux';
import Concentration from './concentration.png'
//import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import DiscreteSlider from './slider.js';

import '@progress/kendo-theme-default/dist/all.css';


// To include the default styles
import 'react-rangeslider/lib/index.css'


import './mood-entry.css';

export class ConcentrationEntry extends Component {

  render() {
  const type = "concentration";
    return (
      
        <div class="overall_mood">
        <div class="div3">
        <div className="card">
          <img src={Concentration} width="150" style={{alignSelf: 'center', paddingBottom: 20}}/>
          <h3>How was your concentration level in daily tasks for today?</h3>
          <h6 style={{paddingBottom:'40px'}}><em>(1 being not at all and 10 being extremely)</em></h6>
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
  concentration: state.entry.newEntry.concentration
});

export default connect(mapStateToProps)(ConcentrationEntry);
