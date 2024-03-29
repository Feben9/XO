// Restart.js
import React from 'react';

export default function Restart(props) {
    const gameOver = props.gameStatus;
    function clickBtn(event) {
        window.location.reload(true);
    }

    return (
        <div>
            {gameOver && <button className='btnStyle' onClick={clickBtn}> Restart </button>}
        </div>
    );
};