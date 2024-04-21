import React from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About'; 
import { Images } from '../../components/ImagesBackground/Images';
import Treatments from '../../components/Treatments/Treatments';
import Contact from '../../components/Contact/Contact';

function Home() {
    return (
        <div>
            <NavBar/>
            <Images/>
            <About/>
            <Treatments/>
            <Contact/>
        </div>
    );
}

export default Home;