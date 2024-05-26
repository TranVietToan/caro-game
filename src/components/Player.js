import React from 'react';
import  "../GameStyle.css";

const Player = (props) => {
    return (
        <div className='player'>
            <div>
                <p><i class="fi fi-rr-circle"></i></p>
                <p>Người chơi {props.name}</p>
            </div>
            {/* <img src={props.avatar} alt=""/> */}
        </div>
    );
};

export default Player;