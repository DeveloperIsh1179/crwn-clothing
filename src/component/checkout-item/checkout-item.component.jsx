import { useContext } from 'react';
import { CartContext } from 'contexts/cart.context';
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={`${imageUrl}`} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <div onClick={removeItemHandler} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addItemHandler} className="arrow">
          &#10095;
        </div>
      </Quantity>
      <Price>{price}</Price>
      <div onClick={clearItemHandler} className="remove">
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
