import React from 'react';
import { useParams } from 'react-router-dom';
import { AUTHOR_LIST } from './Works';
import './WorkDetails.css';

const WorkDetails = ( ) => {

    const { articleNum } = useParams();

    let workDetails;

    AUTHOR_LIST.forEach((author) => {
        author.articles.forEach((article) => {
            if(article.num === Number(articleNum)) {
                workDetails = article;
            }
        })
    })

    const RandomText = () => {
        let string = '';
        const symbolString = "a bc d efghij kl mno pqrs tuv wx yz";
        for (let i = 0; i < 5000; i++) {
            string += symbolString[Math.floor(Math.random() * symbolString.length)];
        }
        return string;
    }

    return (
        <div className='content-details flex-column'>
            <img src={workDetails.src} alt={workDetails.theme} className='content-details__img'/>
            <h1 className='title'>Articles #{ workDetails.num }. {workDetails.theme}</h1>
            <p className='subtitle'>{RandomText()}</p>
        </div>
    );
    
};

export default WorkDetails;