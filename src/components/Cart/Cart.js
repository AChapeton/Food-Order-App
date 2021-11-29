import React from 'react';
import classes from './Cart.module.css';
import Modal from './Modal';
function Cart({ onHideCart }) {
  const cartItems = [
    {
      id: 'c1',
      name: 'Sushi',
      amount: 2,
      price: 12.99,
    },
  ].map((item) => <li className={classes['cart-items']}>{item.name}</li>);

  return (
    <Modal onClick={onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
