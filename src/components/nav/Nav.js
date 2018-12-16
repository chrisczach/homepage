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
      Nav
      </nav>
      </>
  )
}

export default Nav;