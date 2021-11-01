import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './AddressForm.css';
import Clock from './clock.png';
import Calendar from './calendar.png';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography display="inline" className='sentence'>Create new appointment with:    </Typography>
          <Typography display="inline" className='name'><strong>Dr. Arrie Anhari</strong></Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography display="inline">
            for:
          </Typography>  
          <img src={Calendar} width="50" className='pic'/>
          <Typography display="inline">
            at:
          </Typography>
          <img src={Clock} width="50" className='pic'/>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Choose preferred mode of appointment:
          </Typography>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="Online" />}
            label="Online"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="Offline" />}
            label="Offline"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Would you like us to automatically share your recorded data with your provider 1 day before your appointment?</Typography>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="Yes" />}
            label="Yes"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="No" />}
            label="No"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}