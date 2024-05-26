import React, { useState } from 'react';
import  "../GameStyle.css";
import Board from './Board';
import { checkWin } from '../helpers';

const Game = () => {
    const [board, setBoard] = useState(()=>{
        const rows = 10;
        const cols = 10;
        const array2D = Array.from({ length: rows }, () => new Array(cols).fill(null));
        return array2D;
    })

    const [xIsNext, setXIsNext] = useState(true);
    const winner = checkWin(board);
    const handleClick = (rows, cols)=>{
        const boardCopy =[...board];
        if(winner|| boardCopy[rows][cols]) return;
        boardCopy[rows][cols] = xIsNext ? 'X':'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext)
    }
    const handleResetGame = ()=>{
        setBoard(()=>{
            const rows = 10;
            const cols = 10;
            const array2D = Array.from({ length: rows }, () => new Array(cols).fill(null));
            return array2D;
        });
        setXIsNext(true);
    }
    const renderNotification =()=>{
        if(winner){
            return(
                <div className='notification'>
                    {xIsNext ? '0 WIN' : 'X WIN'}
                    <button onClick={handleResetGame} class="btn-restart">RESET GAME</button>
                </div>
            )
        }
    }
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            {renderNotification()}
        </div>
    );
};

export default Game;