import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

class Nav extends PureComponent {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/detail/1">Detail</Link>
            </nav>
        );
    }
}

export default Nav;