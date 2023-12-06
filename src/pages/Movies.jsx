import React from 'react';
import Card from "../components/Card/Card.jsx";
import {movies} from "../constants/MovieDummy.js";
import { useNavigate } from 'react-router-dom';
const Movies = () => {
    const navigate = useNavigate();

    const onClickImg = (item) => {
        navigate(`/movie/${item.title}`, {
                state: {
                    item:{item}
                }
        });
    };
    return (
        <div className='app__movies'>
            {movies.results.map((item)=>{
                return(
                    <Card onClick={onClickImg} key={item.id} item={item} title={item.title}/>
                )
            })}
        </div>
    );
};

export default Movies;