import React, {Component} from 'react';
import axios from 'axios';

// class Product extends Component {
//     constructor(props) {
//         super(props)
//     }

//     deleteProduct(id) {
//         console.log(id)
//         axios.delete(`/api/product/${id}`).then(res => {
//             console.log("deleted")
//             this.props.refresh()
//         })
//     }

//     render() {
//         let {id, name, price, img} = this.props.product;
//         return (
//             <div className="productBox">
//                 <div className="productImg" style={{ backgroundImage: `url(${img})`}}>
//                 <img src={img} alt="product picture" height="100px"/>
//                 </div>
//                 <div className="infoSection">
//                     <p>{name}</p>
//                     <p>{`$${price}`}</p>
//                     <div className="productButtons">
//                         {/* <button onClick={() => this.deleteProduct(this.state.id)} id="delete">Delete</button> */}
//                         <button onClick={_ => this.props.editProduct(this.props.product)} id="edit">Edit</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Product

export default function Product(props) {
    let {id, name, price, img} = props.product;
    return (
        // Since props is defined within the function, we can drop "this."
        // This has no context within this function.
        <div className="productBox">
            <div className="productImg" style={{ backgroundImage: `url(${img})`}}>
            <img src={img} alt="product picture" height="100px"/>
            </div>
            <div className="infoSection">
                <p>{name}</p>
                <p>{`$${price}`}</p>
                <div className="productButtons">
                    {/* <button onClick={() => this.deleteProduct(this.state.id)} id="delete">Delete</button> */}
                    {/* onClick always looks for a callback function */}
                    {/* Give onClick a grenade it can pull the pin out of. */}
                    <button onClick={() => props.editProduct(props.product)} id="edit">Edit</button>
                </div>
            </div>
        </div>
    )
}
