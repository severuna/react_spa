import React from 'react';
import './Contacts.css';
import Instagram from '../../img/Instagram.svg';
import Facebook from '../../img/Facebook.svg';
import Email from '../../img/Email.svg';

const Contacts = () => {
    return (
        <div className="content flex-column">
            <h1 className="title">Contacts</h1>
            <div className='contacts flex-row'>
                <div className='link flex-column'>
                    <img src={Instagram} alt='Instagram' className='link-pic' />
                    <h3 className='link-name'>Instagram</h3>
                </div>
                <div className='link flex-column'>
                    <img src={Facebook} alt='Facebook' className='link-pic' />
                    <h3 className='link-name'>Facebook</h3>
                </div>
                <div className='link flex-column'>
                    <img src={Email} alt='Email' className='link-pic' />
                    <h3 className='link-name'>Email</h3>
                </div>
            </div>
        </div>
    );
};

export default Contacts;