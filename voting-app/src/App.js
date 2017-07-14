import React, { Component } from 'react';
import './App.css';
import Header from './js/header';
import ProductList from './js/productlist';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductList />
      </div>
    );
  }
}

export default App;
