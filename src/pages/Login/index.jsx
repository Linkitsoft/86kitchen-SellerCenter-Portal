import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/Admin-20 (75).png";


const Login = () =>
{

    const [eyeIcon, setEyeIcon] = useState(false);
    const [inputValues, setInputValues] = useState({})
    const navigate = useNavigate()

    // handle value change
    const handleValueChange = (e) =>
    {
        setInputValues({ ...inputValues, [e?.target?.name]: e?.target?.value })
    }
    // handle login
    const handleLogin = () =>
    {
        navigate("/verification")
    };

    const handleKey = (e) =>
    {
        if (e?.key === "Enter")
        {
            handleLogin()
        }
    }
    return (
        <div className="login">
            <div className="login_box">
                <div className="login_topHead">
                    <img src={logoImg} alt="logo"  onClick={() => navigate('/home')}/>
                    <p className="head">Seller Center</p>
                </div>
                <div className="login_inputSection">
                    <div className="login_inputWrapper">
                        <label>Email</label>
                        <input onChange={(e) => handleValueChange(e)} type="text" name="email" placeholder="Enter your email" />
                    </div>
                    <div className="login_inputWrapper">
                        <label>Password</label>
                        <input
                            onChange={(e) => handleValueChange(e)}
                            onKeyDown={(e) => handleKey(e)}
                            name="password"
                            type={eyeIcon === false ? "password" : "text"}
                            placeholder="Password"
                        />
                        <i
                            onClick={() => setEyeIcon(!eyeIcon)}
                            className={
                                eyeIcon === false
                                    ? "fa-regular showEye fa-eye-slash"
                                    : "fa-regular showEye fa-eye"
                            }
                        ></i>
                    </div>
                    <div className="login_loginBtn">
                        <button onClick={handleLogin}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;