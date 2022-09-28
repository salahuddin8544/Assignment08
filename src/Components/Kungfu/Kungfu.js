import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import KungfuPlayer from '../KungfuPlayer/KungfuPlayer';
import Profile from '../Profile/Profile';
import('./Kungfu.css')
const Kungfu = () => {
    const [players,setPlayer]= useState([])
    useEffect(()=>{
        fetch('Kungfu.json')
        .then(res=>res.json())
        .then(data=>setPlayer(data))
    },[])
    return (
        <div className='kunfu-container'>
            <div>
                <div className='kunfu-titla'>
                    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                    <h2>Kungfu master</h2>
                </div>
            <div className='kunfu-player-container'>
                
                {
                    players.map(player=><KungfuPlayer 
                    key={player.id}
                    player={player}
                    ></KungfuPlayer>)
                }
                </div>
            </div>
            <div className='profile-container'>
            <Profile></Profile>
            </div>
        </div>
    );
};

export default Kungfu;