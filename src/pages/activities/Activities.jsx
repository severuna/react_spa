import React from 'react';
import './Activities.css';
import one from './img/conferences_1.webp';

const Activities = () => {
    return (
        <div className="content flex-column">
            <h1 className='title'>Activities</h1>
            <div className='activities flex-row'>
                <div className='activities-item flex-row'>
                    <img src={one} alt='conferences_1' className='activities-item__img' />
                    <div className='activities-item__description flex-column'>
                        <h2 className='item-title'>Conference 1</h2>
                        <p className='activities-item__subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam commodi, recusandae, soluta natus dolorum ipsa officia sunt perferendis, id repellendus iure quae et deserunt ducimus saepe voluptatem. Repellendus, provident laborum!
                        Natus hic excepturi minus doloremque consequatur, officia eligendi iusto commodi reiciendis. Iusto saepe tenetur est quod sapiente. Dolor iure voluptatem, adipisci fugiat dolorem neque enim pariatur, maiores esse, temporibus velit?
                        Neque adipisci repellat dicta id mollitia. Tenetur perspiciatis aut, aliquid alias dolorem obcaecati repellendus iure cumque neque minus enim quis natus cum nam, laudantium cupiditate exercitationem, officia laborum ipsam ea.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;