import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const About = props => {
  return (
    <section className={classes.about}>
      <ScrollableAnchor id={'about'}>
        <header className={classes.heading}>about</header>
      </ScrollableAnchor>
    </section>
  );
};

export default About;
