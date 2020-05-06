// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// // import yin_yang from '../images/yin_yang.png';

// function NavBar() {
//   return (
//     <div class="bold">
//       <Navbar bg="dark" variant="dark">
//         {/* <img src={yin_yang} alt="logo" height="20"/> */}
//         <Navbar.Brand href="/">Jason Wong</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto">
//           </Nav>
//           <Nav>
//             <Nav.Link href="about">About</Nav.Link>
//             <Nav.Link href="cv">CV</Nav.Link>
//             <Nav.Link href="projects">Projects</Nav.Link>
//             {/* <Nav.Link href="collaborations">Collaborations</Nav.Link> */}
//             <Nav.Link href="contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   )
// }

// export default NavBar;

import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import HomeIcon from '@material-ui/icons/Home';

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
    fontFamily: 'Raleway'
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
              <Link href='/'><Button color={"black"}>Home</Button></Link>
          </Typography>
          <Link href='/about'><Button color={"black"}>About</Button></Link>
          <Link href='/CV'><Button color={"black"}>Experience</Button></Link>
          <Link href='/projects'><Button color={"black"}> Projects </Button></Link>
          <Link href='/contact'><Button color={"black"}>Contact</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
