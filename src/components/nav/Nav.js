import React, { Component } from 'react';
import classes from './Nav.module.css';

const Nav = props => {
  
  return (
    <>

      <div className={classes.title}>Chris Czach</div>

      <div onClick={props.navClick} className={classes.navButton}>
          <div  className={props.navOpen ? classes.closeMenu : classes.openMenu} />
      </div>
      <nav className={props.navOpen ? classes.dropDown : classes.dropDown + ' ' + classes.hide}>
        <div className={classes.navWrapper}>
          <div className={classes.navLink}>home</div>
          <div className={classes.navLink}>about</div>
          <div className={classes.navLink}>projects</div>
          <div className={classes.navLink}>contact</div>
      </div>
      </nav>
      </>
  )
}

export default Nav;