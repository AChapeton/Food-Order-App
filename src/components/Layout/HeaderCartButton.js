import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton({ onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Meals</span>
      <span className={classes.badge}>5</span>
    </button>
  );
}

export default HeaderCartButton;
