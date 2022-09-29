import React from 'react';
import'./Profile.css'
import {logo} from '../../logo.svg'
const Profile = () => {
    return (
        <div>
            <div className='personal'>
                {/* <img src={logo} alt="" /> */}
                <h4>thi si img</h4>
                <div>
                    <h3>Salah uddin</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;