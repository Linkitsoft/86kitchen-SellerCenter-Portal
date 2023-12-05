import React, { useState, useEffect } from 'react'
import backImg from "../../assets/images/Admin-20 (29).png"
import girlImg from "../../assets/images/Admin-20 (74).png"
import OTPInput from "otp-input-react";
import Success from '../../components/Modals/Success';
import { useLocation, useNavigate } from 'react-router-dom';

const Verification = () =>
{
    const [OTP, setOTP] = useState("");
    const [modal, setModal] = useState("")

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() =>
    {
        if (!location?.state?.fromLogin)
        {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    const handleLogin = () =>
    {
        window.localStorage.setItem("token", true)
        window.location.reload()
    }
    return (
        <div className='verification'>
            {modal === "verify" && <Success handleLogin={handleLogin} setModal={setModal} />}
            <div className='verification_topHead'>
                <div>
                    <img className='shadow' src={backImg} alt="backImg" onClick={() => navigate(-1)} />
                    <p>2-Step Verification</p>
                </div>
            </div>
            <div className='verification_inner'>
                <div className='verification_box'>
                    <img src={girlImg} alt="girlImg" />
                    <div className='verification_text'>
                        <p>Please enter the 6 digit OTP sent to</p>
                        <p>johnbreed@gmail.com</p>
                    </div>
                    <OTPInput className="verification_otp" value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" />
                    <button onClick={() => setModal("verify")} className='verification_verify'>Verify</button>
                </div>
            </div>
        </div>
    )
}
export default Verification