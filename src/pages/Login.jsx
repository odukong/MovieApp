import React,{useState} from 'react';
import "../index.css"
const Login = () => {
    const [active,setActive]=useState(false)
    const [email,setEmail]=useState("")
    const [emailActive,setEmailActive]=useState(false)
    const [password,setPassword]=useState("")
    const [passwordActive,setPasswordActive]=useState(false)

    const handleLoginActive=()=>{
        return (emailActive & passwordActive)?setActive(true):setActive(false)
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleActiveEmail=()=>{
        let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        return email.match(regEmail)?(setEmailActive(true),handleLoginActive()):(setEmailActive(false),handleLoginActive())
    }

    const handlePasswd=(e)=>{
        setPassword(e.target.value)
    }
    const handleActivePasswd=()=>{
        let regPwd = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
        return password.match(regPwd)?(setPasswordActive(true),handleLoginActive()):(setPasswordActive(false),handleLoginActive())
    }

    return (
        <div className='app__login'>
            <div className='app__login_container'>
                <div className='app__login-title' style={{fontSize:"28px",fontWeight:"bold"}}>이메일 주소와 비밀번호를 입력해주세요</div>
                <form className='app__login_form'>
                    <label for="login-email">이메일 주소</label>
                    <input type="email" id="login-email" onChange={handleEmail} onKeyUp={handleActiveEmail}/>
                    {(!emailActive&email.length>0) ? <div style={{color:"red"}}>올바른 이메일을 입력해주세요</div>:null}
                    <label for="login-pwd">비밀번호</label>
                    <input type="password" id="login-pwd" onChange={handlePasswd} onKeyUp={handleActivePasswd} placeholder="영문,숫자,특수문자 포함 8자 이상"/>
                    {(!passwordActive&password.length>0) ?<div style={{color:"red"}}>올바른 비밀번호를 입력해주세요</div>:null}
                    <button type="button" className={active && 'active'} disabled={!active}>확인</button>
                </form>
            </div>
        </div>
    );
};

export default Login;