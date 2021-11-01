import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import './Review.css'

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className='subhead'>
        Please ensure your appointment details are correct
      </Typography>
      <Typography className='sentence'>You have successfully confirmed your <strong><em className='option'>online
      </em></strong> appointment with <strong><em className='option'>Dr. Anhari</em>
      </strong> for <strong><em className='option'>14 August, 2020</em>
      </strong> at <strong><em className='option'>3:00PM</em></strong>.
      </Typography>
      <Typography>
        Please click on the link below at the designated <br/>time and date to start your session: 
        <Typography className='link'>https://us02web.zoom.us/j/81490404718?pwd=V1ZzUU1HcWVwTG5Kd2o5cXJ2NDcyZz09</Typography>
      </Typography>
    </React.Fragment>
  );
}