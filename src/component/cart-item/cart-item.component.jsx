import { Fragment } from 'react';
import './cart-item.styles.scss';

const CartItem = ({ cartItem: { name, quantity, imageUrl, price } }) => (
  <Fragment>
    <div className="cart-item-container">
      <img src={`${imageUrl}`} alt={`${name}`} />
      <div className="item-details">
        <span>{name}</span>
        <span>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  </Fragment>
);

export default CartItem;
