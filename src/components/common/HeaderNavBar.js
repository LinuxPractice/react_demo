import React from 'react';
import MenuItem from './MenuItem';

const LINKS1 = [
    { id: 1, name: "Toys" , url: "/Toys"},
    { id: 2, name: "Gifts" , url: "/Gifts"},
    { id: 3, name: "Accessories" , url: "/Accessories"},
    { id: 4, name: "Housewares" , url: "/Housewares"}
];


class HeaderNavBar extends React.Component {
  render() {
    return (
    <nav class="navbar navbar-expand-lg py-0 bg-dark text-light">
        <a class="navbar-brand text-light" href="#">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <MenuItem menuName={this.props.menus.headermenu.links1.menuName} menuLinks={this.props.menus.headermenu.links1.subs} />
                <MenuItem menuName={this.props.menus.headermenu.links2.menuName} menuLinks={this.props.menus.headermenu.links2.subs} />
                <MenuItem menuName={this.props.menus.headermenu.links3.menuName} menuLinks={this.props.menus.headermenu.links3.subs} />
            </ul>

        </div>
    </nav>
    );
  }
}

export default HeaderNavBar;