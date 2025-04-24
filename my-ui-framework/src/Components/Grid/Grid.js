import React from 'react';
import './Grid.css';  // Import the CSS file for grid styling

const Grid = ({ children, columns = 3, gap = '10px' }) => {
  return (
    <div
      className="grid-container"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gap }}
    >
      {children}
    </div>
  );
};

export default Grid;
