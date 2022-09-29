import React from 'react';
import ('./KungfuPlayer.css')
const KungfuPlayer = (props) => {
    const{name,about,age,picture,time} = props.player
    console.log(about);
    return (
        <div className='cart'>
            <img className='cover-img' src={picture} alt="" />
            <div className='infp'>
            <h3>{name}</h3>
            <p> {about}</p>
            <h4>For Age: {age}</h4>
            <h4>Time required: {time}</h4>
            </div>
            <button>Add to List</button>
        </div>
    );
};

export default KungfuPlayer;