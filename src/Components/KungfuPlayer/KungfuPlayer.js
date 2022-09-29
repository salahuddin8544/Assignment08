import React from 'react';
import ('./KungfuPlayer.css')
const KungfuPlayer = (props) => {
    const{name,about,age,picture,time,id} = props.player;
   
    return (
        <div className='cart'>
            <img className='cover-img' src={picture} alt="" />
            <div className='infp'>
            <h3>{name}</h3>
            <p> {about}</p>
            <div className='info-cart'>
                <h4>For Age: {age}</h4>
                <h4>Time required: {time}</h4>
            </div>
            </div>
            <button onClick={()=>{props.loadTime(props.player)}}>Add to List</button>
        </div>
    );
};

export default KungfuPlayer;