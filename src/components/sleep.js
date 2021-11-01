import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sleep from './sleep.png';
//import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import '@progress/kendo-theme-default/dist/all.css';


// To include the default styles
import 'react-rangeslider/lib/index.css'

import './mood-entry.css';

export class StressEntry extends Component {

  render() {
    const moods = this.props.moods.map((mood, key) => {
      return (
        <li className="moods" key={key}>
          <input
            type="radio"
            id={mood.id}
            className="hide"
            name="mood"
            value={mood.value}
            onClick={() => this.selectMood(mood.value)}
            defaultChecked={this.props.mood === mood.value} />
          <label htmlFor={mood.id}><i className="fa fa-fw fa-circle" id={mood.colour}></i>{mood.name}</label>
        </li>
      )
    });

    const types = this.props.types.map((type, key) => {
      return (
        <li className="moodTypeItem" key={key}>
          <input
            type="checkbox"
            id={type.name}
            name="moodType"
            value={type.name}
            onClick={() => this.selectMoodTypes(type.name)}
            defaultChecked={this.props.moodTypes.includes(type.name)} />
          <label htmlFor={type.name}>{type.name}</label>
        </li>
      )
    })

    return (
      
        <div class="overall_mood">
        <div class="div3">
        <div className="card">
          <img src={Sleep}/>
          <h3>How stressed were you today?</h3>
          <h4 style={{paddingBottom:'40px'}}>(1 being not at all and 10 being extremely)</h4>
          

        </div>
        </div>
        </div>
      
    );
  }
}

const mapStateToProps = state => ({
  mood: state.entry.newEntry.mood,
  moodTypes: state.entry.newEntry.moodTypes,
  moods: state.entry.moods,
  types: state.entry.types
});

export default connect(mapStateToProps)(StressEntry);
