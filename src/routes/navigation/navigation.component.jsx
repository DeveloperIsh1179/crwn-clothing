import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from 'assets/crown.svg';
import {
  LogoContainer,
  NavigationContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.styles.jsx';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'store/user/user.selector.js';
import { signOutAuth } from 'utils/firebase.utils';
import CartIcon from 'component/cart-icon/cart-icon.component';
import CartDropdown from 'component/cart-dropdown/cart-dropdown.component';
import { CartContext } from 'contexts/cart.context';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutAuth();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
