import React, { Component } from 'react';

class ProductList extends Component{
    render(){
        const { products } = this.props;
        const product = products.map((product, index)=>{
            return <li className="list-group-item"> { product.name } 
                <span className="badge"> { product.qty } </span>  </li>
        })
        return (
            <div className="container">
                <h2>Product List will show here...</h2>
                <ul className="list-group"> {product} </ul>
                
            </div>
        )
    }
}

export default ProductList;