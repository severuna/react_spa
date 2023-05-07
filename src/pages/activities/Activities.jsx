import React from 'react';
import './Activities.css';
import Activity from './Activity';
import one from './img/conferences_1.webp';
import two from './img/conferences_2.webp';
import three from './img/conferences_3.jpg';
import four from './img/conferences_4.jpg';
import five from './img/conferences_5.jpg';
import six from './img/conferences_6.avif';
import seven from './img/conferences_7.webp';
import eight from './img/conferences_8.jpg';

const ACTIVITIES_LIST = [
    {
        id: 0,
        title: 'Conference 1',
        src: one,
        alt: 'Conference 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt? Necessitatibus, culpa qui voluptate blanditiis adipisci vero praesentium, dolorum ipsum facere velit fugit eos sunt suscipit quos. Architecto, nostrum iure. Atque eveniet deleniti facilis tempore illo doloremque recusandae officiis modi tenetur corrupti optio, at magnam odio deserunt!'
    },
    {
        id: 1,
        title: 'Conference 2',
        src: two,
        alt: 'Conference 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt? Necessitatibus, culpa qui voluptate blanditiis adipisci vero praesentium, dolorum ipsum facere velit fugit eos sunt suscipit quos. Architecto, nostrum iure. Atque eveniet deleniti facilis tempore illo doloremque recusandae officiis modi tenetur corrupti optio, at magnam odio deserunt!'
    },
    {
        id: 2,
        title: 'Conference 3',
        src: three,
        alt: 'Conference 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt? Necessitatibus, culpa qui voluptate blanditiis adipisci vero praesentium, dolorum ipsum facere velit fugit eos sunt suscipit quos. Architecto, nostrum iure. Atque eveniet deleniti facilis tempore illo doloremque recusandae officiis modi tenetur corrupti optio, at magnam odio deserunt!'
    },
    {
        id: 3,
        title: 'Conference 4',
        src: four,
        alt: 'Conference 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt? Necessitatibus, culpa qui voluptate blanditiis adipisci vero praesentium, dolorum ipsum facere velit fugit eos sunt suscipit quos. Architecto, nostrum iure. Atque eveniet deleniti facilis tempore illo doloremque recusandae officiis modi tenetur corrupti optio, at magnam odio deserunt!'
    },
    {
        id: 4,
        title: 'Conference 5',
        src: five,
        alt: 'Conference 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt? Necessitatibus, culpa qui voluptate blanditiis adipisci vero praesentium, dolorum ipsum facere velit fugit eos sunt suscipit quos. Architecto, nostrum iure. Atque eveniet deleniti facilis tempore illo doloremque recusandae officiis modi tenetur corrupti optio, at magnam odio deserunt!'
    },
    {
        id: 5,
        title: 'Conference 6',
        src: six,
        alt: 'Conference 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt? Necessitatibus, culpa qui voluptate blanditiis adipisci vero praesentium, dolorum ipsum facere velit fugit eos sunt suscipit quos. Architecto, nostrum iure. Atque eveniet deleniti facilis tempore illo doloremque recusandae officiis modi tenetur corrupti optio, at magnam odio deserunt!'
    },
    {
        id: 6,
        title: 'Conference 7',
        src: seven,
        alt: 'Conference 7',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt? Necessitatibus, culpa qui voluptate blanditiis adipisci vero praesentium, dolorum ipsum facere velit fugit eos sunt suscipit quos. Architecto, nostrum iure. Atque eveniet deleniti facilis tempore illo doloremque recusandae officiis modi tenetur corrupti optio, at magnam odio deserunt!'
    },
    {
        id: 7,
        title: 'Conference 8',
        src: eight,
        alt: 'Conference 8',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt? Necessitatibus, culpa qui voluptate blanditiis adipisci vero praesentium, dolorum ipsum facere velit fugit eos sunt suscipit quos. Architecto, nostrum iure. Atque eveniet deleniti facilis tempore illo doloremque recusandae officiis modi tenetur corrupti optio, at magnam odio deserunt!'
    }
];

let elements = [];

ACTIVITIES_LIST.forEach((element) => {
    elements.push(<Activity {...element} key={element.id}/>);
});


const Activities = () => {
    return (
        <div className="content flex-column">
            <h1 className='title'>Activities</h1>
            <div className='activities flex-column'>
                {elements}
            </div>
        </div>
    );
};

export default Activities;