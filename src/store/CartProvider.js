import CartContext from './card-context';

const CartProvider = ({ children }) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext value={cartContext}>{children}</CartContext>;
};

export default CartProvider;
