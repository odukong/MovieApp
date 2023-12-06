import React,{useState} from 'react';
import Description from "./Description.jsx";
import "./Card.css";
const Card = ({item,onClick,title}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    const handleClick = () => {
        onClick&&onClick(item);
    };
    return (
        <div className="section-card" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-img-frame">
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="poster"/>
            </div>
            <div className="card-description">
                <div className="card-description-title">{title}</div>
                <div className='card-description-average'>{item.vote_average}</div>
            </div>
            {
                isHovered&&<Description name={title} overview={item.overview}/>
            }
        </div>
    );
};

export default Card;

