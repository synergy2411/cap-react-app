import React, { Component } from 'react';

class Product extends Component {

    constructor() {
        super();
        this.initialState = {
            name: "",
            qty: ""
        }
        this.state = this.initialState;
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    addNewProduct = () => {
        // console.log(this.props);
        // console.log(this.state);
        this.props.addProduct(this.state);
        this.setState(this.initialState);
    }
    render() {
        const ProductList = ()=>{
            return (
                <div>
                    <h3>StateLess Product List</h3>
                </div>
            )
        }
        return (
            <div>
                <h2>Product Loaded!</h2>
                <ProductList />
                <form>
                    Product Name :
                    <input type="text"
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                    Product Quantity :
                    <input type="text"
                        className="form-control"
                        name="qty"
                        value={this.state.qty}
                        onChange={this.handleChange} />
                    <button onClick={this.addNewProduct}
                        type="button"
                        className="btn btn-block btn-primary">
                        Add Product</button>
                </form>
            </div>
        )
    }
}

export default Product;