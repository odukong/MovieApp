import React from 'react';
import Card from "../components/Card/Card";
import {tvs} from "../constants/TvDummy";

const TV = () => {
    return (
        <div className='app__tvs'>
            {tvs.results.map((item)=>{
                return(
                    <Card key={item.id} item={item} title={item.name}/>
                )
            })}
        </div>
    );
};

export default TV;