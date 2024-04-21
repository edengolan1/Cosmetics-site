import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className='navbar'>
            <div className='side-right'>
                <div>אודות</div>
                <div>טיפולים</div>
                <div>צור קשר</div>
            </div>
            <div className='side--left'>Rachelle</div>
        </div>
    );
}

export default NavBar;