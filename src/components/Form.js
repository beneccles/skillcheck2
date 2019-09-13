import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            price: 0,
            imgurl: ""
        }
    }

    handleURL(url){
        this.setState({imgurl: url});
    }

    handlePrice(price){
        this.setState({price: price});
    }

    handleName(name){
        this.setState({name: name})
    }

    clearInput(){

    }

    postToDB(){

    }

    render() {
        return (
            <div className="newProductBox">
                <div id="displayImg">

                </div>
                <div id="newProductInput">
                    <p>Image URL:</p>
                    <input value={this.state.imgurl} onChange={e => this.handleURL(e.target.value)} type="text"/>
                    <p>Product Name:</p>
                    <input value={this.state.name} onChange={e => this.handleName(e.target.value)} type="text"/>
                    <p>Price:</p>
                    <input value={this.state.price} onChange={e => this.handlePrice(e.target.value)} type="number"/>
                </div>
                <div id="buttons">
                    <button>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;