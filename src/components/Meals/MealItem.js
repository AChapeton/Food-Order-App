import React from 'react';
import classes from './MealItem.module.css';
function MealItem({ name, description, price }) {
  return (
    <li className={classes.meal}>
      <h3>{name}</h3>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>${price}</div>
    </li>
  );
}

export default MealItem;
