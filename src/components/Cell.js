import React from 'react';
import  "../GameStyle.css";

const Cell = (props) => {
    const {rowIndex, colIndex, value, onClick} = props;
    const cellClass = value === 'X' ? 'x-cell' : 'o-cell';
    return (
        <div className={`game-cell ${cellClass}`} onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;