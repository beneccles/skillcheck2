import React, {Component} from 'react';
import axios from 'axios';

class Product extends Component {
    constructor(props) {
        super(props)
    }

    deleteProduct(id) {
        console.log(id)
        axios.delete(`/api/product/${id}`).then(res => {
            console.log("deleted")
            this.props.refresh()
        })
    }

    render() {
        const {product} = this.props;
        const id = product.id;
        return (
            <div className="productBox">
                <div className="productImg">
                <img src={product.img} alt="product picture" height="100px"/>
                </div>
                <div className="infoSection">
                    <p>{product.name}</p>
                    <p>{`$${product.price}`}</p>
                    <div className="productButtons">
                        <button onClick={() => this.deleteProduct(id)} id="delete">Delete</button>
                        <button onClick={() => this.props.edit(product.id, product.name, product.price, product.img)} id="edit">Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product