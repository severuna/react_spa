import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="content flex-column">
            <h1 className='title'>Congratulations!</h1>
            <p className='subtitle'><span>R-N-W</span> іs a company that specializes in writing articles.</p>
            <div className='content-main flex-column'>
                <h2 className='content-main__title'>Our principles at work:</h2>
                <div className='container flex-row'>
                    <div className='item flex-column'>
                        <img src='https://media.wired.com/photos/5955c3573ff99d6b3a1d165c/3:2/w_1600%2Cc_limit/books.jpg' alt='read pic' className='item-img' />
                        <h3 className='item-title'>Read</h3>
                        <p className='item-subtitle'>We carefully study all information, thoroughly check all sources of information.</p>
                    </div>
                    <div className='item flex-column'>
                        <img src='https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-10/types-of-data-analysis.jpg' alt='analysis pic' className='item-img' />
                        <h3 className='item-title'>Evaluation</h3>
                        <p className='item-subtitle'>We apply analytical approaches to evaluate information, conduct detailed discussions and draw balanced conclusions.</p>
                    </div>
                    <div className='item flex-column'>
                        <img src='https://www.digitalmeetsculture.net/wp-content/uploads/2015/04/article.jpg' alt='write pic' className='item-img' />
                        <h3 className='item-title'>Write</h3>
                        <p className='item-subtitle'>After studying and analyzing all the information, we write an article where we present our conclusions with mandatory references to all sources that have proven their truth.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;