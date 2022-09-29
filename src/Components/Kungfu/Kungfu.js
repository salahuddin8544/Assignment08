
import React, { useEffect, useState } from 'react';
import KungfuPlayer from '../KungfuPlayer/KungfuPlayer';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
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
            <Header></Header>
            <div className='kunfu-container'>    
            <div className='kunfu-player-container'>       
                {
                    players.map(player=><KungfuPlayer 
                    key={player.id}
                    player={player}
                    loadTime={loadTime}
                    ></KungfuPlayer>)
                }
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