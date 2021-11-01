import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux';
import {addStress, addEnergy, addConcentration, addSleepQuality, addSleepQuantity, addFood} from '../actions/index';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 25,
    paddingTop:20,
    width: 570,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  }
];

function valuetext(value) {
  return `${value}`;
}

function DiscreteSlider(prop) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
      const type = prop.type;
      if (type === "stress"){
        prop.dispatch(addStress(newValue));
      } else if (type === "energy"){
        prop.dispatch(addEnergy(newValue))
      } else if (type === "concentration"){
        prop.dispatch(addConcentration(newValue))
      } else if (type === "sleep_quality"){
        prop.dispatch(addSleepQuality(newValue))
      } else if (type === "sleep_quantity"){
        prop.dispatch(addSleepQuantity(newValue))
      } else if (type === "food"){
        prop.dispatch(addFood(newValue))
      } 
  };

  return (
    <div className={classes.root}>
      <Slider
        onChange={handleChange}
        defaultValue={1}
        aria-labelledby="discrete-slider-always"
        step={1}
        min={1}
        max={10}
        valueLabelDisplay="on"
      />
    </div>
  );
}


export default (DiscreteSlider);