import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <header className="App-header">
                <h2 className='App-title'>Vatom Creation</h2>
                <div><KeyboardArrowDownIcon/></div>
      </header>
        </div>
    )
}

export default Header