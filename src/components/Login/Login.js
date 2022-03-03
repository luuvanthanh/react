import React, { useState } from "react";
import styles from "./Login.module.css";
import { useDispatch} from "react-redux";

const Login = () => {
    const [email, SetEmail] = useState('')
    const [pass, setPass] = useState('')
    const dispatch= useDispatch();
    const getEmail = (e) => {
        SetEmail(e.target.value);
    }

    const getPassword = (e) => {
        setPass(e.target.value);
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        dispatch({type: 'LOGIN_PAGE', payload: {email, pass}});
    }

    return (
        <form className={styles.container} action="" onSubmit={(e)=>handleSubmit(e)}>
            <div className={styles.container}>
                <label htmlFor="uname"><b>Email</b></label>
                <input type="text" onChange={(e) => getEmail(e)}  name="email" required/>
                <label htmlFor="psw"><b>Mật khẩu</b></label>
                <input type="password" onChange={(e) => getPassword(e)}  name="psw" required/>
                <button type="submit" >Login</button>
                <label>
                <input type="checkbox" defaultChecked name="remember" /> Remember me
                </label>
            </div>
        </form>
    );
};

export default Login;