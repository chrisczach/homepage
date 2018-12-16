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
          <div onClick={props.navClick} className={classes.navLink}><h1 className={classes.heading}>home</h1></div>
          <div onClick={props.navClick} className={classes.navLink}><h1 className={classes.heading}>about</h1></div>
          <div onClick={props.navClick} className={classes.navLink}><h1 className={classes.heading}>projects</h1></div>
          <div onClick={props.navClick} className={classes.navLink}><h1 className={classes.heading}>contact</h1></div>
      </div>
      </nav>
      </>
  )
}

export default Nav;