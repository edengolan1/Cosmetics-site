import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className='navbar'>
            <div className='side-right'>
                <div><a href='#about'>אודות</a></div>
                <div><a href='#div-treatments'>טיפולים</a></div>
                <div><a href='#contact'>צור קשר</a></div>
            </div>
            <div className='side--left'>Rachelle</div>
        </div>
    );
}

export default NavBar;