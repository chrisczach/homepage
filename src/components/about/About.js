import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const About = props => {
  return (
    <section className={classes.about}>
      <ScrollableAnchor id={'about'}>
        <header className={classes.heading}>about</header>
      </ScrollableAnchor>
      <figure className={classes.profileImage}>
      <img
          className={classes.image}
        src="https://via.placeholder.com/250"
        /></figure>
        
      <figcaption className={classes.profileCaption}>
        <h1 className={classes.title}>Chris Czach</h1>
        <h2 className={classes.subTitle}>Front End Developer</h2>
        </figcaption>
      <div className={classes.details}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  );
};

export default About;
