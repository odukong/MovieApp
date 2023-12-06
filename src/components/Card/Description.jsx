import React from 'react';
import "./Card.css";
const Description = ({name,overview}) => {
    return (
        <div className="card-overlay">
            <div className="overlay-title">{name}</div>
            <div className="ovelay-description">{overview}</div>
        </div>
    );
};

export default Description;