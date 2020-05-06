import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../App.css'
import Huang from '../images/Huang_red_circle.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    marginLeft: "10%",
    marginTop: "10%",
    textAlign: "center",
    // border: "1px solid blue"
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className='fade-in'>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img class="" src={Huang} alt="Japan" style={{ width: '50%' }}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <br />
          <div className="white-box-name">Jason Wong</div><br></br>
          <div className="white-box-job">Full stack software developer</div>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}
