import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../App.css'
import Huang from '../images/Huang_red_circle.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    marginLeft: "8%",
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
            <img src={Huang} alt="Japan" style={{ width: '20vw' }}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <br />
            <div className="white-box-name">Jason Wong</div><br />
            <div className="white-box-job">Software Engineer</div><br /><br />
            {/* <button className="enterBtn"><a href="/" className="enterBtn">Enter</a></button> */}
            <a href="/about" className="enterBtn">About me</a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
