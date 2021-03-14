import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = (props) => {
    const {  handleToggle } = props;
    return (
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item"><Link onClick={handleToggle} to="/#home" class="nav__link">Home</Link></li>
                <li class="nav__item"><Link onClick={handleToggle} to="/#services" class="nav__link">My Services</Link></li>
                <li class="nav__item"><Link onClick={handleToggle} to="/#about" class="nav__link">About me</Link></li>
                
                <li class="nav__item"><Link onClick={handleToggle} to="/#work" class="nav__link">My Work</Link></li>
                
                <li class="nav__item"><Link onClick={handleToggle} to="/#blogs" class="nav__link">Blog</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;