import React, { Component } from 'react';
import classes from './Projects.module.css';
import Card from './card/Card';
import Popup from './popup/Popup';

const Projects = props => {
  const projects = props.projects.map(e => <Card clickHandler={()=> props.togglePopupHandler(e)} >{e.url} {e.title} {e.description}</Card>);

  return (
    <section>{projects}<Popup popupObject={props.popupObject} shown={props.showPopup} closeHandler={props.togglePopupHandler} /></section>
  )
}

export default Projects;