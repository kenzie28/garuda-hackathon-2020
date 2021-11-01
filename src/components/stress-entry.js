import React, { Component } from 'react';
import { connect } from 'react-redux';
import StressGuy from './stressguy.png';
import DiscreteSlider from './slider';

import '@progress/kendo-theme-default/dist/all.css';

// To include the default styles
import 'react-rangeslider/lib/index.css'

import './mood-entry.css';

export class StressEntry extends Component {
  
  render() {
    const type = "stress";
    return (
        <div class="overall_mood">
        <div class="div3">
        <div className="card">
          <img src={StressGuy} width="150" style={{alignSelf: 'center', paddingBottom: 20}}/>
          <h3>How stressed were you today?</h3>
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
  stress: state.entry.newEntry.stress
});

export default connect(mapStateToProps)(StressEntry);
