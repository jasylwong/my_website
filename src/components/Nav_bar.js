import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import '../App.css'
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import HomeIcon from '@material-ui/icons/Home';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black"
  },
  nav: {
    background: "white",
    color: "black",
    boxShadow: "none",
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
              <Link href='/'><Button>Home</Button></Link>
          </Typography>
          <Link href='/about'><Button>About</Button></Link>
          <Link href='/CV'><Button>Experience</Button></Link>
          <Link href='/projects'><Button> Projects </Button></Link>
          <Link href='/contact'><Button>Contact</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
