import React, { Component } from 'react';
import classes from './Card.module.css';


const Card = props => {

  return (
    <div className={classes.card} onClick={props.clickHandler}>
      <h1 className={classes.title}>{props.project.title}</h1>
      <p className={classes.descripton}>{props.project.description}</p>
    </div>
  )
}

export default Card;