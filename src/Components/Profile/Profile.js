import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import'./Profile.css'
import  img from '../../profile.png'
const Profile = ({player,time}) => {
    let newt = 0;
    for(const itemPlayer of time){
         newt = newt + itemPlayer.time;
    }
    const [breakTime, setBreakTime]=useState(0)
    const addBreakTime=(number)=>{
        setBreakTime(number);
        localStorage.setItem('second',number)
    }
    useEffect(()=>{
        const getData= localStorage.getItem('second')
        setBreakTime(getData)
    },[])
    const notify = () => {
       
        toast.success('Your activation successfully compleated', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
           
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
                <div>
                <button onClick={notify} className='active common2'>Activity Completed</button>
                <ToastContainer />
                </div>
        </div>
    );
};

export default Profile;