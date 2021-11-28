import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import Button from '../UI/Button';
function MealItemForm({ id }) {
  return (
    <form className={classes.form}>
      <label htmlFor=""></label>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <Button label="+ Add" />
    </form>
  );
}

export default MealItemForm;
