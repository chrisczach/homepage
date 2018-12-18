import React, { Component } from 'react';
import classes from './Contact.module.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const Contact = props => {

  return(
    <form className={classes.contact} name="contact" method="POST" data-netlify="true">
      <ScrollableAnchor id={'contact'}>
        <header className={classes.heading}>contact</header>
      </ScrollableAnchor>
    <label className={classes.labels} for="name">Name </label>   <input className={classes.inputs} placeholder="Full Name" type="text" name="name" required/>

    <label className={classes.labels} for="email">Email </label><input className={classes.inputs} placeholder="Email Address" type="email" name="email" required/>

    <label className={classes.labels} for="subect">Subject </label><textarea  className={classes.inputs} placeholder="Subject" name="subject"></textarea>
 
    <label className={classes.labels} for="message">Message </label><textarea  className={classes.inputs}  placeholder="Message"  name="message" required></textarea>
 
      <button className={classes.submit}type="submit">Send</button>

</form>
 
  )
}

export default Contact;