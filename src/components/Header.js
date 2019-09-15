import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="logo">
                    <h1 id="logotext">SHELFIE</h1>
                    <Link to='/'><button className="headerButtons" id="dash">Dashboard</button></Link>
                    <Link to='/add'><button className="headerButtons" id="add">Add Inventory</button></Link>
                </div>
            </header>
        )
    }
}

export default Header