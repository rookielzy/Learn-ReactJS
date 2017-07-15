import React, { Component } from 'react';
import avatar from '../images/avatars/helen.jpg';
import productPreview from '../images/products/image-aqua.png';
import '../css/productlist.css';

class ProductList extends React.Component {
    render() {
        return(
            <div>
                <Product />
                <Product />
                <Product />
            </div>
        );
    }
}

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handlerUpVote = this.handlerUpVote.bind(this);
    }
    handlerUpVote() {
        console.log('test');
    }
    render() {
        return(
            <div className="product-container">
                <img src={productPreview} alt="product-preview"className="product-preview"/>
                <span className="votes" onClick={this.handlerUpVote}>12</span>
                <h4 className="product-title"><a href="#">React React React</a></h4>
                <div className="product-disc">Learning About React Learning About React</div>
                <div className="product-author">
                    <p>Made by </p>
                    <img src={avatar} alt="avatar" className="avator"/>
                </div>
            </div>
        );
    }
}

export default ProductList;