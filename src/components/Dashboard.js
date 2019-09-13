import React, {Component} from 'react';
import Product from './Product';

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    renderProducts() {
        const {inventory} = this.props;
        return inventory.map((product, index) => {
            return (
                <Product key={product.id} product={product} />
            )
        })
    }

    render() {
        console.log(this.props.inventory)
        return (
            <div>
                {this.renderProducts()}
            </div>
        )
    }
}

export default Dashboard