import React, { Component } from 'react';
import classes from './Card.module.css';


const Card = props => {

  return (
    <div onClick={props.clickHandler}>{props.children}</div>
  )
}

export default Card;