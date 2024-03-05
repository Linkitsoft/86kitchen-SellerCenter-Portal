import React from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/Admin-20 (75).png";
import SignupForm from "../../components/Forms/SignupForm";

const Signup = () =>
{
    const navigate = useNavigate()

    return (
        <div className="login">
            <div className="login_box">
                <div className="login_topHead">
                    <img src={logoImg} alt="logo" onClick={() => navigate('/home')} />
                    <p className="head">Partner Center</p>
                </div>
                <div className="login_inputSection">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
};
export default Signup;