import { Fragment } from 'react';
import { CartItemContainer, ItemDetails } from './cart-item.styles.jsx';

const CartItem = ({ cartItem: { name, quantity, imageUrl, price } }) => (
  <Fragment>
    <CartItemContainer>
      <img src={`${imageUrl}`} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  </Fragment>
);

export default CartItem;
