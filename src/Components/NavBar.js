import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {

    return (
        <div >
            <ul className='navBar'>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/work'>Work</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;