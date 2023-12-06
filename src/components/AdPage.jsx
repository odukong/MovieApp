import React,{useState} from 'react';
import Ad from "./Ad";

export default function AdPage(){
    const [isLogIn,setIsLogIn]=useState(false);
    const handleLogInClick=()=>{
        setIsLogIn(prev=>!prev);
    }

    return (
        <div className='app__AdPage'>
            {isLogIn&&<Ad/>}
            <button onClick={handleLogInClick}>{isLogIn ? '광고안보기' : '광고보기'}</button>
        </div>
    );

};