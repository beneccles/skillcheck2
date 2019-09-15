import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="logo">
                    <h1 id="logotext">SHELFIE</h1>
                    <Link to='/'>Dashboard</Link>
                    <Link to='/add'>Add Inventory</Link>
                </div>
            </header>
        )
    }
}

export default Header