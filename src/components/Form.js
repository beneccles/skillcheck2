import React, { Component } from 'react';
import axios from 'axios';

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
        let { fieldURL, fieldName, fieldPrice } = this.refs;

        // If there is something there to remove, remove it.
        // Otherwise, we can leave that field alone.
        if (fieldURL.value) {
            fieldURL.value = "";
        }

        if (fieldName.value) {
            fieldName.value = "";
        }

        if (fieldPrice.value) {
            fieldPrice.value = 0;
        }

        // Clear Form's state to finish the job.
        this.setState({
            id: null,
            name: "",
            price: 0,
            imgurl: ""
        })
    }

    postToDB(product) {
        let { name, price, img } = this.state

        axios.post('/api/product', product).then(res => {
            this.clearInput()
            this.props.refresh()
        })
    }

    editToDB() {
        let { id, name, price, img} =this.state

        let updatedProduct = {
            id: id,
            name: name,
            price: price,
            img: img
        }

        axios.put('/api/product', updatedProduct).then(res => {
            this.clearInput()
            this.props.refreshInventory()
        })
    }

    // If the component gets updated with new props, run this code.
    componentDidUpdate(oldProps) {
        let { id, name, price, img } = this.props.editItem
        if (oldProps.editItem.id !== this.props.editItem.id) {
            this.setState({ id:id, name:name, price:price, imgurl:img, edit: true})
        }
    }
    

    // If there is something in editItem, render edit box. Otherwise, render new item add.

    render() {
        return (
            <div className="newProductBox">
                {this.state.imgurl ?
                <div id="displayImg" style={{ backgroundImage: `url('${this.state.imgurl}')`}}>
                    {/* <img src={this.state.imgurl} alt="previewPicture" /> */}
                </div> :
                <div id="displayImg">

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
                    { this.state.edit ? <button className="editBoxButton" onClick={() => this.editToDB(this.state)}>Save Changes</button> :
                    <button className="editBoxButton" onClick={() => this.postToDB(this.state)}>Add to Inventory</button>}
                </div>
            </div>
        )
    }
}

export default Form;