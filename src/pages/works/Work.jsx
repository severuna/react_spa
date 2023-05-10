import React from 'react';
import './Work.css';
import music from './img/music.svg';
import literature from './img/literature.svg';
import science from './img/science.svg';
import { Link, Route, Routes } from 'react-router-dom';
import WorkDetails from './WorkDetails';
import { useLocation } from 'react-router-dom';

const Work = (props) => {
    const location = useLocation();

    let category_img;

    if (props.category === 'music') {
        category_img = music;
    } else if (props.category === 'literature') {
        category_img = literature;
    } else {
        category_img = science;
    }

    return (
        <>
        <Link to={`article`}>
            <div className='work flex-column'>
                <img src={props.src} alt={props.theme} className='work-img' />
                <h3 className='work-title'>{props.theme}</h3>
                <div className='work-category flex-row'>
                    <img src={category_img} alt='category' className='work-category__pic' />
                    <p>{props.category}</p>
                </div>
            </div>
        </Link>
        {/* <Routes>
            <Route path={`${props.num}`} element={<WorkDetails key={props.num} {...props}/>} />
        </Routes> */}
        </>
    );
};

export default Work;