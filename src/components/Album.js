import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Banner from './Banner';
import reactImage1 from './image_entry.jpeg';
import reactImage2 from './image_quick_tips.jpeg';
import reactImage3 from './image_appointment.jpeg';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];



export default function Album() {




  const classes = useStyles();



  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="100%" background-color="blue">
            <Banner></Banner>

          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={reactImage1}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Daily Entries
                    </Typography>
                  <Typography>
                    Choose this option to record your mood, stress and automatically detected heart rate
                    </Typography>
                </CardContent>
                <CardActions>

                  <NavLink to="/form-entry" activeClassName="hurray">
                    Enter mood for today
                  </NavLink>


                </CardActions>
              </Card>
            </Grid>
            <Grid item key={2} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={reactImage2}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Quick Tips
                    </Typography>
                  <Typography>
                    Feeling sad, stressed or anxious? See some quick tips that can help!
                    </Typography>
                </CardContent>
                <CardActions>
                  <NavLink to="/quick-tips" activeClassName="hurray">
                    Get Quick Tips
                  </NavLink>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={3} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={reactImage3}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Appointments
                    </Typography>
                  <Typography>
                    Click to see your therapist's schedule and book an appointment
                    </Typography>
                </CardContent>
                <CardActions>
                  <NavLink to="/book-appointment" activeClassName="hurray">
                    Book Now
                  </NavLink>
                </CardActions>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* End footer */}
    </React.Fragment>
  );
}