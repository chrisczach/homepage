import React, { Component, useState } from 'react';
import classes from './Contact.module.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const Contact = props => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e, target = e.target.name) => {
    const value = e.target.value || e.target.innerHTML;

    setForm({ ...form, [target]: value });
  };

  return (
    <form
      className={classes.contact}
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <ScrollableAnchor id={'contact'}>
        <header className={classes.heading}>contact</header>
      </ScrollableAnchor>
      <label className={classes.labels} for="name">
        Name{' '}
      </label>{' '}
      <div className={classes.inputWrap}>
        <input
          value={form.name}
          onChange={handleChange}
          className={classes.inputs}
          type="text"
          name="name"
          required
        />
        <span
          className={
            form.name.length === 0 ? classes.placeholder : classes.inputsFilled
          }
        >
          Full Name
        </span>{' '}
      </div>
      <label className={classes.labels} for="email">
        Email{' '}
      </label>
      <div className={classes.inputWrap}>
        <input
          value={form.email}
          onChange={handleChange}
          className={classes.inputs}
          type="email"
          name="email"
          required
        />
        <span
          className={
            form.email.length === 0 ? classes.placeholder : classes.inputsFilled
          }
        >
          Email Address
        </span>
      </div>
      <label className={classes.labels} for="email">
        Phone{' '}
      </label>
      <div className={classes.inputWrap}>
        <input
          value={form.phone}
          onChange={handleChange}
          className={classes.inputs}
          type="tel"
          name="phone"
        />
        <span
          className={
            form.phone.length === 0 ? classes.placeholder : classes.inputsFilled
          }
        >
          Phone Number
        </span>
      </div>
      <label className={classes.labels} for="subect">
        Subject{' '}
      </label>
      <div className={classes.inputWrap}>
        <div
          value={form.subject}
          onInput={e => handleChange(e, 'subject')}
          contentEditable="true"
          className={classes.inputs}
          name="subject"
        />
        <span
          className={
            form.subject.length === 0
              ? classes.placeholder
              : classes.inputsFilled
          }
        >
          Subject
        </span>
      </div>
      <label className={classes.labels} for="message">
        Message{' '}
      </label>
      <div className={classes.inputWrap}>
        <div
          value={form.message}
          onInput={e => handleChange(e, 'message')}
          contentEditable="true"
          className={classes.inputs + '  ' + classes.message}
          name="message"
          required
        />
        <span
          className={
            form.message.length === 0
              ? classes.placeholder
              : classes.inputsFilled
          }
        >
          Message
        </span>
      </div>
      <button className={classes.submit} type="submit">
        Send &rarr;
      </button>
    </form>
  );
};

export default Contact;
