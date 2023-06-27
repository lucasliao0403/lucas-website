import React from 'react';
import {Link} from 'react-scroll';

// "rsf" for shortcut (react snippets)

function Navbar() {
    return (
        <div className="navbar">
            <ul className="menu">

                
                <li> <Link activeClass="active"  spy to="about"> about </Link> </li>
                <li> <Link activeClass="active"  spy to="projects"> projects </Link></li>
                <li> <Link activeClass="active"  spy to=""> contact </Link></li>
                

            </ul>
        </div>
    );
}

export default Navbar;