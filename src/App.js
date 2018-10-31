import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from './components/common/Header';
import HeaderNavBar from './components/common/HeaderNavBar';
import Footer from './components/common/Footer';
import './css/SASS/App.scss';
import TopLinks from './components/common/TopLinks';

import data from './data/data.json';
library.add(faSearch);


class App extends Component {
  render() {
    return (
      <div class="main container-fluid">
      <TopLinks />
      <Header />
      <HeaderNavBar menus = {data} />
      <div className="row">

      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
