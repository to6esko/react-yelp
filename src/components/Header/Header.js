import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component{
    render() {
        return (
            <div>
                <Link to="/">
                    <h1>Yelp</h1>
                </Link>
                <section>
                    Fullstack.io
                </section>
            </div>
        );
    }
};

export default Header;