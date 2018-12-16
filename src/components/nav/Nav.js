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
          <div className={classes.navLink}>Link One</div>
          <div className={classes.navLink}>Link Two</div>
          <div className={classes.navLink}>Link Three</div>
          <div className={classes.navLink}>Link Four</div>
      </div>
      </nav>
      </>
  )
}

export default Nav;