import React from 'react';
import '../App.css'
import Me from '../images/D50_3710.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    marginLeft: "8%",
    marginTop: "5%"
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div>
      <h1 className="titles">About me</h1>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className="polaroid">
              <img src={Me} alt="me"/>
              <p>Me trying to smile!</p>
            </div>            
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              {/* <h3>> console.log("Hello world!")</h3> */}
              
              {/* <p>> import 'qualified_actuary' from './​Institute and Faculty of Actuaries'</p>
              <p>
                > const jason = {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Makers_Academy: Jan-Apr2020,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full_stack_developer: true,<br />

                > Makers Academy graduate, qualified actuary. */}
              <p>
                I am a Full Stack software developer, Makers Academy graduate, and qualified actuary.<br /><br />
                I am Always striving for self-improvement and a career where I can help move the world forward via tech. <br /><br />
                Now I am eager to use my driven nature and adept programming skills to help companies who share these values.<br />
              </p><br />
              <h4>Tech stack:</h4><br />
              <div>
                <Chip label="Ruby" color='secondary'/>&nbsp;
                <Chip label="Rails" variant="outlined" color='secondary'/>&nbsp;
                <Chip label="Sinatra" variant="outlined" color='secondary'/>&nbsp;
                <Chip label="RSpec" variant="outlined" color='secondary'/>&nbsp;
                <Chip label="Capybara" variant="outlined" color='secondary'/>&nbsp;
              </div><br />
              <div>
                <Chip label="JavaScript" color='primary'/>&nbsp;
                <Chip label="React" color='primary' variant="outlined"/>&nbsp;
                <Chip label="Node.js" color='primary' variant="outlined"/>&nbsp;
                <Chip label="Express" color='primary' variant="outlined"/>&nbsp;
                <Chip label="MongoDB" color='primary' variant="outlined"/>&nbsp;
                <Chip label="jQuery" color='primary' variant="outlined"/>&nbsp;
                <Chip label="Jest" color='primary' variant="outlined"/>&nbsp;
              </div><br />
              <div>
                <Chip label="HTML" style={{backgroundColor:'green', color: 'white'}}/>&nbsp;
                <Chip label="CSS" style={{backgroundColor:'orange', color: 'white'}}/>&nbsp;
                <Chip label="Material-UI" style={{borderColor: 'orange', color: 'orange'}} variant="outlined"/>&nbsp;
                <Chip label="Bootstrap" style={{borderColor: 'orange', color: 'orange'}} variant="outlined"/>&nbsp;
              </div><br />
              <div>
                <Chip label="GitHub"  style={{backgroundColor:'purple', color: 'white'}}/>&nbsp;
                <Chip label="SQL" style={{backgroundColor:'purple', color: 'white'}}/>&nbsp;
                <Chip label="Travis CI" style={{backgroundColor:'purple', color: 'white'}}/>&nbsp;
                <Chip label="Heroku" style={{backgroundColor:'purple', color: 'white'}}/>&nbsp;
                <Chip label="Netlify" style={{backgroundColor:'purple', color: 'white'}}/>&nbsp;
              </div><br />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default About; 