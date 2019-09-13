import React, {Component} from 'react';

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <header>
                <div className="logo">
                    <h1 id="logotext">SHELFIE</h1>
                </div>
            </header>
        )
    }
}

export default Header