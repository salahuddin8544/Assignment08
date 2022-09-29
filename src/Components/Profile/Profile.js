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
                <div className='my-info common2'>
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
                <div className='break common2'>
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
                <div className='exercise-time common common2'>
                   
                        <h3>Exercise Time</h3>
                        <p>{newt}s</p>
                </div>
                <div className='break-time common common2'>
                   
                        <h3>Brak Time </h3>
                        
                </div>
                <button className='active common2'>Activity Completed</button>
        </div>
    );
};

export default Profile;