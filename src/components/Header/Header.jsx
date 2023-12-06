import React from 'react';
import {Link} from "react-router-dom";
import LoginButton from '../LoginButton';
import './Header.css';

const Header = () => {
    return (
        <div className="app__header">
            <div className='app__header-img'>
                <Link to="/">
                    <img
                            style={{ width: "154px", height: "20px" }}
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                            alt="로고"
                    />
                </Link>
            </div>
            <ul className='app__header-list'>
                <li className='app__header-list-item'><Link to="/movie">영화</Link></li>
                <li className='app__header-list-item'><Link to="/tv">TV 프로그램</Link></li>
                <li className='app__header-list-item'><Link to="/person">인물</Link></li>
                <li className='app__header-list-item'><LoginButton/></li>
            </ul>
        </div>
    );
};

export default Header;