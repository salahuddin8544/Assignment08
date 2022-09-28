import React, { useEffect, useState } from 'react';
import KungfuPlayer from '../KungfuPlayer/KungfuPlayer';
import Profile from '../Profile/Profile';
import('./Kungfu.css')
const Kungfu = () => {
    const [player,setPlayer]= useState([])
    useEffect(()=>{
        fetch('Kungfu.json')
        .then(res=>res.json())
        .then(data=>setPlayer(data))
    },[])
    console.log(player);
    return (
        <div className='kunfu-container'>
            <div className='kunfu-player-container'>
            <KungfuPlayer></KungfuPlayer>
            </div>
            <div className='profile-container'>
            <Profile></Profile>
            </div>
        </div>
    );
};

export default Kungfu;