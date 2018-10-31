import React from 'react';
import logo from '../../images/logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);
library.add(faPhone);
library.add(faUser);
library.add(faShoppingBasket);
library.add(faShare);


class TopLinks extends React.Component {
  render() {
    return (
      <div id="top">
        <nav>
          <div id="top-links" class="nav float-right">
            <ul class="list-inline  m-0">
              <li class="list-inline-item"><a href="https://www.retroactives.com/index.php?route=information/contact">
                <i>
                  <FontAwesomeIcon icon="phone" />
                </i>               
              </a> 
              <span class="d-none d-sm-none d-md-inline">352-398-3961</span></li>
              <li class="list-inline-item dropdown">
                <a href="https://www.retroactives.com/index.php?route=account/account" title="My Account" class="dropdown-toggle" data-toggle="dropdown">
                  <i>
                    <FontAwesomeIcon icon="user" />
                  </i> 
                  <span class="d-none d-sm-none d-md-inline">My Account</span> <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li>
                  <a href="https://www.retroactives.com/index.php?route=account/register">Register</a>
                  </li>
                  <li>
                    <a href="https://www.retroactives.com/index.php?route=account/login">Login</a>
                  </li>
                </ul>
              </li>

              <li class="list-inline-item">
                <a href="/my-wishlists" id="wishlist-total" title="/my-wishlists">
                  <i>
                    <FontAwesomeIcon icon="heart" />
                  </i> 
                  <span class="d-none d-sm-none d-md-inline">Wish List (0)</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="/my-shopping-cart" title="Shopping Cart">
                  <i>
                    <FontAwesomeIcon icon="shopping-basket" />
                  </i> 
                  <span class="d-none d-sm-none d-md-none">Shopping Cart</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="/checkout" title="Checkout">
                  <i>
                    <FontAwesomeIcon icon="share" />
                  </i> 
                  <span class="d-none d-sm-none d-md-inline">Checkout</span>
                </a>
              </li>          
            </ul>            
          </div>
       </nav>
      </div>
    );
  }
}
export default TopLinks;    