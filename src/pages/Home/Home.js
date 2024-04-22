import React from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About'; 
import { Images } from '../../components/ImagesBackground/Images';
import Treatments from '../../components/Treatments/Treatments';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <div>
            <NavBar/>
            <Images/>
            <About/>
            <Treatments/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home;