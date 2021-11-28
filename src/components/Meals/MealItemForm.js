import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
function MealItemForm() {
  return (
    <form className={classes.form}>
      <label htmlFor=""></label>
      <Input />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
