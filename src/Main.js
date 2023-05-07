import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Main.css';
import NavBar from './components/nav-bar/NavBar';
import Home from './pages/home/Home';
import Activities from './pages/activities/Activities';
import Contacts from './pages/contacts/Contacts';
import Works from './pages/works/Works';
import Footer from './components/footer/Footer';

const Main = () => {
    return (
        <div className="main flex-column">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/react_spa/activities' element={<Activities />} />
                    <Route path='/react_spa/contacts' element={<Contacts />} />
                    <Route path='/react_spa/works' element={<Works />} />
                    <Route path='/react_spa/' element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Main;
