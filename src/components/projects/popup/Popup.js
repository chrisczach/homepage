import React, { Component } from 'react';
import classes from './Popup.module.css';

const Popup = props => {

  return (
    <div className={props.shown ? classes.wrap : classes.wrap + ' ' + classes.hide}>
      <header className={classes.title}>{props.popupObject.title}</header>
      <div className={classes.close} onClick={props.closeHandler}>X</div>
      <iframe className={classes.frame} src={props.popupObject.url} />
    </div>
  )
}

export default Popup;