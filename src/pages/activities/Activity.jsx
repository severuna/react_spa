import React from 'react';

const Activity = ( props ) => {
    return (
        <div className='activities-item flex-row'>
        <img src={props.src} alt={props.alt} className='activities-item__img' />
        <div className='activities-item__description flex-column'>
            <h2 className='item-title'>{props.title}</h2>
            <p className='activities-item__subtitle'>{props.description}.</p>
        </div>
    </div>
    );
};

export default Activity;