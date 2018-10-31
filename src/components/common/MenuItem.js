import React from 'react';

class MenuItem extends React.Component {
  render() {
    return (
        <li class="nav-item dropdown">
            <a class="nav-link text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.props.menuName}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

                <div class="dropdown-inner">
                {this.props.menuLinks.map((listItem) => 
                    <a class="dropdown-item" key={listItem.id} href="{listItem.url}">{listItem.name}</a>)}
                </div>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
    );
  }  
}
export default MenuItem;