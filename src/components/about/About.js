import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const About = props => {
  return (
    <section className={classes.about}>
      <ScrollableAnchor id={'about'}>
        <header className={classes.heading}>about</header>
      </ScrollableAnchor>
      <img
        className={classes.profileImage}
        src="https://via.placeholder.com/150"
        />
        
      <figcaption className={classes.profileCaption}>
        <h1 className={classes.title}>Chris Czach</h1>
        <h2 className={classes.subTitle}>Front End Developer</h2>
        </figcaption>
      <div className={classes.details}>Details</div>
    </section>
  );
};

export default About;
