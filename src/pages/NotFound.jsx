import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const onMoveMain = () => {
        navigate(`/`);
    };

    return (
        <div className='app__notFound'> 
            <div className='app__notFound-content' style={{textAlign:"left",width:"80%"}}>                    
                <h2>해당 페이지를 찾지 못했습니다.</h2>
                <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
                <div style={{color:"red",cursor:"pointer"}} onClick={onMoveMain}>메인 페이지로 이동</div>
            </div>
        </div>
    );
};

export default NotFound;