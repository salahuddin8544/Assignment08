import React, { useState } from 'react';
import'./Profile.css'
import  img from '../../profile.png'
const Profile = ({player,time}) => {
    const [name]=player
    let newt = 0;
    for(const itemPlayer of time){
         newt = newt + itemPlayer.time;
    }
    const [breakTime, setBreakTime]=useState(0)
    const addBreakTime=(number)=>{
        setBreakTime(number);
        localStorage.setItem('test', number)
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
                        <button onClick={()=>addBreakTime(10)}>10s</button>
                    </div>
                    <div>
                        <button onClick={()=>addBreakTime(20)}>20s</button>
                    </div>
                    <div>
                        <button onClick={()=>addBreakTime(30)}>30s</button>
                    </div>
                    <div>
                        <button onClick={()=>addBreakTime(40)}>40s</button>
                    </div>
                   </div>
                </div>
                <div className='exercise-time common common2'>
                   
                        <h3>Exercise Time</h3>
                        <p>{newt}s</p>
                </div>
                <div className='break-time common common2'>
                   
                        <h3>Break Time </h3>
                        <p>{breakTime}s</p>
                        
                </div>
                <button className='active common2'>Activity Completed</button>
        </div>
    );
};

export default Profile;