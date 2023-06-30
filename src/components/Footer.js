import React from 'react';
import {Link} from 'react-scroll';

function Footer() {
    return (
        <div className="footer">
            <div className="return">
                <Link activeClass="active"  spy to="hero"> 
                    back to top
                </Link>
            </div>
            <div className="email"> 
                <a href = "mailto: lucasliao0403@gmail.com">lucasliao0403@gmail.com</a>
            </div>
        </div>
    );
}

export default Footer;