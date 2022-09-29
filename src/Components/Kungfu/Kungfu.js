import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import KungfuPlayer from '../KungfuPlayer/KungfuPlayer';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import('./Kungfu.css')
const Kungfu = () => {
    const [players,setPlayer]= useState([])
    const [time,setTime]= useState([]);
    useEffect(()=>{
        fetch('Kungfu.json')
        .then(res=>res.json())
        .then(data=>setPlayer(data))
    },[])

    const loadTime = (players)=>{
        const newPlayer = [...time,players]
       setTime(newPlayer)
    }
    return (
        <div>
            <div className='kunfu-container'>
            <div>
                <div className='kunfu-title'>
                    <FontAwesomeIcon className='icon' icon={faCoffee}></FontAwesomeIcon>
                    <h2><span className='title'>K</span>ungfu<span className='title'> M</span>aster</h2>
                </div>
            <div className='kunfu-player-container'>
                
                {
                    players.map(player=><KungfuPlayer 
                    key={player.id}
                    player={player}
                    loadTime={loadTime}
                    ></KungfuPlayer>)
                }
                </div>
            </div>
            <div className='profile-container'>
            <Profile 
            time={time}
            player ={players}
            ></Profile>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Kungfu;