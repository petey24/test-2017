import React from 'react';

const Controls = ({buttons, bars, handleChange, handleClick}) => (
    <div className="controls">
        <select onChange={handleChange}>
            {bars.map((bar, index) => {
            return (
                <option value={index}>{`Bar ${index + 1}`}</option>
                )
                } 
            )}
        </select>

        {buttons.map((button) => {
            return (
                <div className="button" onClick={handleClick}>{button}</div>
                )
            } 
        )}
    </div>
);

export default Controls;