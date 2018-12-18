import React, { Component } from 'react';
import classes from './Contact.module.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const Contact = props => {

  return(
    <form className={classes.contact} name="contact" method="POST" data-netlify="true">
      <ScrollableAnchor id={'contact'}>
        <header className={classes.heading}>contact</header>
      </ScrollableAnchor>
      <label className={classes.labels} for="name">Name </label>   <div className={classes.inputWrap}><input  className={classes.inputs} type="text" name="name" required/><span className={classes.placeholder}>Full Name</span> </div>

    <label className={classes.labels} for="email">Email </label><div className={classes.inputWrap}><input className={classes.inputs} type="email" name="email" required/><span className={classes.placeholder}>Email Address</span></div>

    <label className={classes.labels} for="email">Phone </label><div className={classes.inputWrap}><input className={classes.inputs} type="tel" name="phone" /><span className={classes.placeholder}>Phone Number</span></div> 

    <label className={classes.labels} for="subect">Subject </label><div className={classes.inputWrap}><div contentEditable="true"   className={classes.inputs} name="subject"></div><span className={classes.placeholder}>Subject</span></div>
 
    <label className={classes.labels} for="message">Message </label><div className={classes.inputWrap}><div contentEditable="true"className={classes.inputs + '  '+ classes.message }  name="message" required></div><span className={classes.placeholder}>Message</span></div>
 
      <button className={classes.submit}type="submit">Send &rarr;</button>

</form>
 
  )
}

export default Contact;