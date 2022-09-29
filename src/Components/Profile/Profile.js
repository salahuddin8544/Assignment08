import React from 'react';
import'./Profile.css'
import  img from '../../profile.png'
const Profile = ({player,time}) => {
    let newt = 0;
    for(const itemPlayer of time){
         newt = newt + itemPlayer.time;
    }
    return (
        <div className='profile-info'>
            <div className='personal common2'>
                <img src={img} alt="" />
                <div>
                    <h3>Salah uddin</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
                </div>
                <div className='my-info'>
                    <div>
                        <p>60<span>kg</span></p>
                        <p>wight</p>
                    </div>
                    <div>
                        <p>5.5</p>
                        <p>Height</p>
                    </div>
                    <div>
                        <p>25<span>yrs</span></p>
                        <p>Age</p>
                    </div>
                </div>
                <div className='break'>
                    <h3>Add a Break</h3>
                   <div className='all-break'>
                   <div>
                        <button>10s</button>
                    </div>
                    <div>
                        <button>20s</button>
                    </div>
                    <div>
                        <button>30s</button>
                    </div>
                    <div>
                        <button>40s</button>
                    </div>
                   </div>
                </div>
                <div className='exercise-time common'>
                   
                        <h3>Exercise Time</h3>
                </div>
                <div className='break-time common'>
                   
                        <h3>Brak Time </h3>
                        <p>{newt}</p>
                </div>
                <button className='active'>Activity Completed</button>
        </div>
    );
};

export default Profile;