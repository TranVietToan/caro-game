import React from 'react';
import  "../GameStyle.css";
import Cell from './Cell';

const Board = ({cells, onClick}) => {
    console.log(cells)
    return (
      <div className='game-board'>
        {cells.map((row, rowIndex) => (
          <div key={rowIndex} className='board-row'>
            {row.map((cell, colIndex) => (
              <Cell
                key={colIndex}
                value={cell}
                rowIndex={rowIndex}
                colIndex={colIndex}
                onClick={()=>onClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

export default Board;