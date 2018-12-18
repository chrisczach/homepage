import React, { Component } from 'react';
import classes from './Nav.module.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';


const Nav = props => {
  configureAnchors({ offset: -props.width/120, scrollDuration: 600 })
  return (
    <>
<ScrollableAnchor id={'home'}>
      <div className={classes.title}>Chris Czach</div>
      </ScrollableAnchor>
      <div onClick={props.navClick} className={classes.navButton}>
          <div  className={props.navOpen ? classes.closeMenu : classes.openMenu} />
      </div>
      <nav className={props.navOpen ? classes.dropDown : classes.dropDown + ' ' + classes.hide}>
        <div className={classes.navWrapper}>
          <div onClick={props.navClick} className={classes.navLink}>
            <a className={classes.link} href='#home' />
            <h1 className={classes.heading}>home</h1></div>
          <div onClick={props.navClick} className={classes.navLink}>
          <a className={classes.link} href='#about' />
            <h1 className={classes.heading}>about</h1></div>
          <div onClick={props.navClick} className={classes.navLink}>
          <a className={classes.link} href='#projects' />
            <h1 className={classes.heading}>projects</h1></div>
          <div onClick={props.navClick} className={classes.navLink}>
          <a className={classes.link} href='#contact' />
            <h1 className={classes.heading}>contact</h1></div>
      </div>
      </nav>
      </>
  )
}

export default Nav;