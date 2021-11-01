import React, { Component } from 'react';
import { connect } from 'react-redux';
import Food from './food.png';
//import { makeStyles } from '@material-ui/core/styles';

import DiscreteSlider from './slider.js';

import '@progress/kendo-theme-default/dist/all.css';

// To include the default styles
import 'react-rangeslider/lib/index.css'

import './mood-entry.css';

export class SleepQuantityEntry extends Component {

  render() {
    const type = "food";
    return (
      <div class="overall_mood">
        <div class="div3">
        <div className="card">
          <img src={Food} width="150" style={{alignSelf: 'center', paddingBottom: 20}}/>
          <h3>How would you rate your food consumption for today?</h3>
          <h6 style={{paddingBottom:'40px'}}><em>(1 being too little/too much and 10 being perfectly enough)</em></h6>
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
  food: state.entry.newEntry.food
});

export default connect(mapStateToProps)(SleepQuantityEntry);
