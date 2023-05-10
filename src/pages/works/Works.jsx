import React from 'react';
import './Works.css';
import writer_1 from './img/writer_1.svg';
import writer_2 from './img/writer_2.svg';
import writer_3 from './img/writer_3.svg';
import writer_4 from './img/writer_4.svg';
import WorkList from './WorkList';
import { Outlet, useLocation, Route, Routes } from 'react-router-dom';
import WorkDetails from './WorkDetails';

const  AUTHOR_LIST = [
    {
        id: 0,
        name: 'Corey Hill',
        nickname: '@corhee',
        avatar: writer_1,
        articles: [
            {
                num: 234,
                category: 'music',
                theme: 'Music theme 1',
                src: 'https://i0.wp.com/www.songwritingmagazine.co.uk/wp-content/uploads/Marilyn-Manson-640x427.jpeg'
            },
            {
                num: 333,
                category: 'science',
                theme: 'Science theme 1',
                src: 'https://wexnermedical.osu.edu/-/media/images/wexnermedical/blog/2021-stories/12/virus-mutations/virus-mutations_large.jpg'
            },
            {
                num: 12,
                category: 'literature',
                theme: 'Literature theme 1',
                src: 'https://booksatwork.s3.amazonaws.com/wp-content/uploads/2019/10/Open-Book-Karen-Arnold-Pixabay-1200.jpg'
            },
        ]
    },
    {
        id: 1,
        name: 'Miriam Reddle',
        nickname: '@mirley',
        avatar: writer_2,
        articles: [
            {
                num: 465,
                category: 'music',
                theme: 'Music theme 2',
                src: 'https://img.rl0.ru/afisha/e904x508p0x350f5616x3209q85i/s5.afisha.ru/mediastorage/72/0e/f86ae515c07243f18401f6b80e72.jpg'
            },
            {
                num: 55,
                category: 'science',
                theme: 'Science theme 2',
                src: 'https://th-thumbnailer.cdn-si-edu.com/RIcwtRMHf8FDEJul9bnUmnxSPQk=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png'
                
            },
            {
                num: 98,
                category: 'literature',
                theme: 'Literature theme 2',
                src: 'https://c4.wallpaperflare.com/wallpaper/896/717/89/armor-artwork-concept-art-dark-souls-wallpaper-preview.jpg'
            },
        ]
    },
    {
        id: 2,
        name: 'Greg Nikopolous',
        nickname: '@nikreous',
        avatar: writer_3,
        articles: [
            {
                num: 342,
                category: 'music',
                theme: 'Music theme 3',
                src: 'https://www.powerwolf.net/templates/yootheme/cache/4a/PW-BAND-2020-14_RGB-4affca6c.jpeg'
            },
            {
                num: 67,
                category: 'science',
                theme: 'Science theme 3',
                src: 'https://ime.springerhealthcare.com/wp-content/uploads/2020/11/right-brain-left-brain.jpg'
            },
            {
                num: 453,
                category: 'literature',
                theme: 'Literature theme 3',
                src: 'https://rare-gallery.com/thumbs/4598921-artwork-stalker.-video-games.jpg'
            },
        ]
    },
    {
        id: 3,
        name: 'Stana Catilio',
        nickname: '@statil',
        avatar: writer_4,
        articles: [
            {
                num: 574,
                category: 'music',
                theme: 'Music theme 4',
                src: 'https://www.gannett-cdn.com/-mm-/a50bc7c232d9562c1865c93809adc6a1628c6d44/c=0-93-800-545/local/-/media/2015/02/08/IAGroup/DesMoines/635590091815104049-D2-20100524-NEWS-5240802-4.jpg?width=1200'
            },
            {
                num: 345,
                category: 'science',
                theme: 'Science theme 4',
                src: 'https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2021/opinion/shutterstock1691180986-1638372196.jpg&w=900&height=601'
            },
            {
                num: 398,
                category: 'literature',
                theme: 'Literature theme 4',
                src: 'https://images5.alphacoders.com/609/609173.jpg'
            },
        ]
    },
]

let elements = [];

AUTHOR_LIST.forEach((author) => {
    elements.push(<WorkList {...author} key={author.id}/>)
})

const Works = () => {

    const location = useLocation();

    return (
        <div className="content flex-column">
            <h1 className='title'>Works</h1>
            <div className='works flex-column'>
                {location.pathname === '/react_spa/works/article' ? <Outlet /> : elements}
            </div>
        </div>
    );
};

export default Works;