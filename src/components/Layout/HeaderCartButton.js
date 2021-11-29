import React, { useContext } from 'react';
import CartContext from '../../store/card-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Meals</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
