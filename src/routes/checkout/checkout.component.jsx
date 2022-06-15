import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from 'contexts/cart.context';

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>I AM THE CHECKOUT PAGE</h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <span>{item.quantity}</span>
            <span>decrement</span>
            <span onClick={() => addItemToCart(item)}>increment</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
