import React from "react";
import './Header/Header.css';
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
            greeting:"로그인 해주세요!"
        }
        this.handleLoginClick=this.handleLoginClick.bind(this)
        this.handleLogoutClick=this.handleLogoutClick.bind(this)
    }
    handleLoginClick(){
        this.setState({isLoggedIn:true,greeting:"환영합니다!"})
    }
    handleLogoutClick(){
        this.setState({isLoggedIn:false,greeting:"로그인 해주세요!"})
    }
    render(){
        return(
            <div className="app__header-login">
                {this.state.isLoggedIn?
                    <div>
                        <button onClick={this.handleLogoutClick}>로그아웃</button>
                        <div className="app__header-login-ment">{this.state.greeting}</div>
                    </div>
                        : 
                    <div>
                        <button onClick={this.handleLoginClick}>로그인</button>
                        <div className="app__header-login-ment">{this.state.greeting}</div>
                    </div>
                }
            </div>
        )
    }
}
export default LoginControl;