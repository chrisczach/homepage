import React, { Component } from 'react';
import classes from './Projects.module.css';
import Card from './card/Card';
import Popup from './popup/Popup';

const Projects = props => {
  const projects = props.projects.map(e => <Card project={e} clickHandler={() => props.togglePopupHandler(e)} >test</Card>);

  return (
    <section className={classes.projects}>
      <header className={classes.heading}>Projects</header>
      {projects}
      <Popup popupObject={props.popupObject} shown={props.showPopup} closeHandler={props.togglePopupHandler} />
    </section>
  )
}

export default Projects;