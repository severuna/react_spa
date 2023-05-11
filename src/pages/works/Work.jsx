import React from 'react';
import './Work.css';
import music from './img/music.svg';
import literature from './img/literature.svg';
import science from './img/science.svg';
import { Link } from 'react-router-dom';

const Work = (props) => {

    let category_img;

    if (props.category === 'music') {
        category_img = music;
    } else if (props.category === 'literature') {
        category_img = literature;
    } else {
        category_img = science;
    }

    return (
        <Link to={`/react_spa/works/${props.num}`}>
            <div className='work flex-column'>
                <img src={props.src} alt={props.theme} className='work-img' />
                <h3 className='work-title'>{props.theme}</h3>
                <div className='work-category flex-row'>
                    <img src={category_img} alt='category' className='work-category__pic' />
                    <p>{props.category}</p>
                </div>
            </div>
        </Link>
    );
};

export default Work;