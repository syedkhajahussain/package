import React from 'react';
import './Heading.css';

const Heading = ({ level = 1, children }) => {
  const Tag = `h${level}`;
  return <Tag className="heading">{children}</Tag>;
};

export default Heading;
