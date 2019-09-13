import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()

        this.state = {
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

        this.setState({
            name: "",
            price: 0,
            imgurl: ""
        })
    }

    postToDB() {

    }

    render() {
        return (
            <div className="newProductBox">
                <div id="displayImg">

                </div>
                <div id="newProductInput">
                    <p>Image URL:</p>
                    <input ref="fieldURL" value={this.state.imgurl} onChange={e => this.handleURL(e.target.value)} type="text" />
                    <p>Product Name:</p>
                    <input ref="fieldName" value={this.state.name} onChange={e => this.handleName(e.target.value)} type="text" />
                    <p>Price:</p>
                    <input ref="fieldPrice" value={this.state.price} onChange={e => this.handlePrice(e.target.value)} type="number" />
                </div>
                <div id="buttons">
                    <button onClick={() => this.clearInput()}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;