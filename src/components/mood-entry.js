import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addMoodTypes, removeMoodTypes} from '../actions/index';
import Mood from './mood.png'

//import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';


import '@progress/kendo-theme-default/dist/all.css';


// To include the default styles
import 'react-rangeslider/lib/index.css'


import './mood-entry.css';

export class MoodEntry extends Component {


  selectMoodTypes(moodType) {
    if (!this.props.moodTypes.includes(moodType)) {
      this.props.dispatch(addMoodTypes(moodType));
    } else {
      this.props.dispatch(removeMoodTypes(moodType));
    }
  }

  render() {
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
          <img src={Mood} width="150" style={{alignSelf: 'center', paddingBottom: 20}}/>
          <h2>What words would you use to describe your mood for today (select all that apply):</h2>

          <ul className="types">
            {types}
          </ul>

        </div>
        </div>
        </div>
      
    );
  }
}

const mapStateToProps = state => ({
  moodTypes: state.entry.newEntry.moodTypes,
  types: state.entry.types
});

export default connect(mapStateToProps)(MoodEntry);
