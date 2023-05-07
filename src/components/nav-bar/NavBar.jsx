import React, { useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    useEffect(() => {
        console.log('page load');
    }, []);
    
    return (
        <nav className="header flex-row">
            <Link to='react_spa' className='logo'>R-n-W</Link>
            <Link to='react_spa/activities' className='header-item'>Activities</Link>
            <Link to='react_spa/works' className='header-item'>Works</Link>
            <Link to='react_spa/contacts' className='header-item'>Contacts</Link>
        </nav>
    );
};

export default NavBar;