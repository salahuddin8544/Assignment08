import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div>
            <div className='kunfu-title'>
                    <FontAwesomeIcon className='icon' icon={faCoffee}></FontAwesomeIcon>
                    <h2><span className='title'>K</span>ungfu<span className='title'> M</span>aster</h2>
                </div>
        </div>
    );
};

export default Header;