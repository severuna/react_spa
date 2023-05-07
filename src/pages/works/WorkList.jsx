import React from 'react';
import './WorkList.css';
import Work from './Work';

const WorkList = (props) => {

    let articles_list = [];

    props.articles.forEach((article) => {
        articles_list.push(<Work {...article} key={article.num} />);
    });

    return (
        <div className="author flex-column">
            <div className='author-head flex-row'>
                <img src={props.avatar} alt={props.name} className='author-head__avatar'/>
                <h3 className='item-title'>{props.name} <span>{props.nickname}</span></h3>
            </div>
            <div className='author-list flex-row'>
                {articles_list}
            </div>
        </div>
    );
};

export default WorkList;