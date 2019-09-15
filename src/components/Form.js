import React, { Component } from 'react';
import axios from 'axios';
import noImage from '../assets/noimage.jpg';
import { withRouter } from 'react-router-dom';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            id: null,
            name: "",
            price: 0,
            imgurl: ""
        }
    }

    handleURL(url) {
        this.setState({ imgurl: url });
    }

    handlePrice(price) {
        this.setState({ price: price });
    }

    handleName(name) {
        this.setState({ name: name })
    }

    clearInput() {
        // let { fieldURL, fieldName, fieldPrice } = this.refs;

        // If there is something there to remove, remove it.
        // Otherwise, we can leave that field alone.

        if (this.state.id) {
            this.props.history.push('/');
        } else {
            // if (fieldURL.value) {
            //     fieldURL.value = "";
            // }

            // if (fieldName.value) {
            //     fieldName.value = "";
            // }

            // if (fieldPrice.value) {
            //     fieldPrice.value = 0;
            // }

            // Clear Form's state to finish the job.
            this.setState({
                id: null,
                name: "",
                price: 0,
                imgurl: "",
                edit: false
            })
        }
    }

    postToDB(product) {
        axios.post('/api/product', product).then(res => {
            this.props.history.push('/')
        })
    }

    editToDB() {
        let { id, name, price, imgurl } = this.state
        let updatedProduct = {
            id: id,
            name: name,
            price: price,
            img: imgurl
        }

        console.log(updatedProduct.imgurl)
        axios.put('/api/product', updatedProduct).then(res => {
            this.props.history.push('/')
        })
    }

    componentDidMount() {
        let { id } = this.props.match.params;

        axios.get(`/api/product/${id}`).then(product => {
            let { id, name, price, img } = product.data[0];
            console.log(product)
            this.setState({
                id: id,
                name: name,
                price: price,
                imgurl: img,
                edit: true
            })

        })
    }

    componentDidUpdate(oldProps) {
        if (oldProps.match.path !== this.props.match.path) {
            this.setState({ name: "", price: 0, imgurl: "", edit: false })
        }
    }


    // If there is something in editItem, render edit box. Otherwise, render new item add.

    render() {
        return (
            <div className="newProductBox">
                {this.state.imgurl ?
                    <div id="displayImg" style={{ backgroundImage: `url('${this.state.imgurl}')` }}>
                        {/* <img src={this.state.imgurl} alt="previewPicture" /> */}
                    </div> :
                    <div id="displayImg" style={{ backgroundImage: `url('${noImage})` }}>

                    </div>}
                <div id="newProductInput">
                    <p>Image URL:</p>
                    <input ref="fieldURL" value={this.state.imgurl} onChange={e => this.handleURL(e.target.value)} type="text" />
                    <p>Product Name:</p>
                    <input ref="fieldName" value={this.state.name} onChange={e => this.handleName(e.target.value)} type="text" />
                    <p>Price:</p>
                    <input ref="fieldPrice" value={this.state.price} onChange={e => this.handlePrice(e.target.value)} type="number" />
                </div>
                <div id="buttons">
                    {/* Change the buttons based on whether we are adding a new product, or editting an old one. */}
                    <button className="editBoxButton" onClick={() => this.clearInput()}>Cancel</button>
                    {this.state.edit ? <button className="editBoxButton" id="secondButton" onClick={() => this.editToDB(this.state)}>Save Changes</button> :
                        <button className="editBoxButton" id="secondButton" onClick={() => this.postToDB(this.state)}>Add to Inventory</button>}
                </div>
            </div>
        )
    }
}

export default withRouter(Form);