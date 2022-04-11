import React, {Component} from 'react';

type NavBarProps = {
    count: number;
}

class Navbar extends Component<NavBarProps> {
    render() {
        return (
            <nav className='navbar'>
                <i className="fa-solid fa-leaf navbar-logo"></i>
                Habit Tracker
                <span className="navbar-count">{this.props.count}</span>
            </nav>
        );
    }
}

export default Navbar;