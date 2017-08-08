import React from 'react';

const Bars = ({bars, selectedBar}) => (
    <div className="bars">
        {bars.map((bar, index) => {
            console.log(selectedBar, index);
            const divStyle = {
                width: bar + '%'
            }
            return (
                <div className={`bar ${selectedBar == index ? 'selected': ''}`}>
                    <span className="bar__text">{bar}%</span>
                    <div className={`bar__width ${bar > 100 ? 'full': ''}`} style={divStyle}>
                    </div>
                </div>
                )
            } 
        )}
    </div>
);

export default Bars;