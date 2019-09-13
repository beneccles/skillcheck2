import React, {Component} from 'react';

class Product extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {product} = this.props;
        return (
            <div className="productBox">
                <div className="productImg">
                <img src={product.img} alt="product picture" height="100px"/>
                </div>
                <div className="infoSection">
                    <p>{product.name}</p>
                    <p>{`$${product.price}`}</p>
                </div>
            </div>
        )
    }
}

export default Product