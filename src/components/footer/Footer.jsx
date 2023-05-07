import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Instagram from '../../img/Instagram.svg';
import Facebook from '../../img/Facebook.svg';
import Email from '../../img/Email.svg';

const Footer = () => {
    return (
        <footer className='footer flex-row'>
            <div className='footer-pages flex-column'>
                <Link to='react_spa/activities' className='footer-pages__item'>Activities</Link>
                <Link to='react_spa/works' className='footer-pages__item'>Works</Link>
                <Link to='react_spa/contacts' className='footer-pages__item'>Contacts</Link>
            </div>
            <Link to='react_spa' className='footer-logo'>R-n-W</Link>
            <div className='footer-pages flex-column'>
                <h2 className='footer-pages__title'>Visit our media:</h2>
                <div className='footer-media__links flex-row'>
                    <img src={Instagram} alt='Instagram logo' className='footer-media__link-img' />
                    <img src={Facebook} alt='Facebook logo' className='footer-media__link-img' />
                    <img src={Email} alt='Email logo' className='footer-media__link-img' />
                </div>
            </div>
        </footer>
    );
};

export default Footer;