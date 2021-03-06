import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';

function Header({ onShowCart }) {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals App</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="" />
      </div>
    </>
  );
}

export default Header;
