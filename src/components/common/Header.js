import React from 'react';
import logo from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  render() {
    return (

        <header className="mt-2 mb-2">

          <div class="row">
            <div class="col-md-3 col-xs-12 text-center">
              <img src={logo} className="img-fluid" alt="logo" />
            </div>

            <div class="col-md-6 col-xs-12" id="search-box">
                  <form class="form-inline  search-box justify-content-center input-group">
                <input class="form-control input-group-append" type="search" placeholder="Search" aria-label="Search" />
                  <span class="input-group-append">
                    <button class="btn btn-default fa fa-search searchbutton" type="submit">
                    <i>
                        <FontAwesomeIcon icon="search" />
                    </i></button>
                  </span>
                 
                  </form>
            </div>
            <div class="col-md-3 col-xs-12">
              <div id="cart" class="btn-group btn-block">
                <button type="button" data-toggle="dropdown" data-loading-text="Loading..." class="btn btn-secondary btn-block dropdown-toggle"><i class="fa fa-shopping-cart"></i> <span id="cart-total">0 item(s) - $0.00</span></button>
                <ul class="dropdown-menu pull-right">
                  <li>
                  <p class="text-center">Your shopping cart is empty!</p>
                  </li>
                </ul>
              </div>
            </div>
         
          </div>
        </header>
    );
  }
}
export default Header;