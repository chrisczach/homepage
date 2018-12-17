import React, { Component } from 'react';
import classes from './Projects.module.css';
import Card from './card/Card';
import Popup from './popup/Popup';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const Projects = props => {
  const projects = props.projects.map(e => <Card project={e} clickHandler={() => props.togglePopupHandler(e)} >test</Card>);

  return (
    <section className={classes.projects}>
      <ScrollableAnchor id={'projects'}>
        <header className={classes.heading}>projects</header>
        </ScrollableAnchor>
      {projects}
      <Popup popupObject={props.popupObject} shown={props.showPopup} closeHandler={props.togglePopupHandler} />
    </section>
  )
}

export default Projects;