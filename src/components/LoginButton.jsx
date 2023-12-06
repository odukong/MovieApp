import React from 'react';
import { useNavigate } from 'react-router-dom';
const LoginButton = () => {
    const navigate = useNavigate();

    const handleLoginButton=()=>{navigate('/login')}
    return (
        <div className="app__header-loginButton">
            <button onClick={handleLoginButton}>로그인</button>
        </div>
    );
};

export default LoginButton;