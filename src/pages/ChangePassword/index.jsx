import React, { useState } from 'react'
import lockIcon from "../../assets/images/Admin-20 (21).png"

import { toast } from 'react-toastify';
import Sidebar from '../../components/Sidebar';

const ChangePassword = () =>
{
    const [eyeIcon, setEyeIcon] = useState(false);
    const [eyeIcon2, setEyeIcon2] = useState(false);
    const [pass, setPass] = useState("");
    const [cPass, setCpass] = useState("");

    const handleUpdate = () =>
    {
        toast.success("Password updated succesfully")
    }
    return (
        <div className="mainLayout">
            <div className="mainLayout_parent">
                <Sidebar index={"7"} />
                <div className="dashboard">
                    <p className="dashboard_title">Change Password</p>
                    <div className='setPassword'>
                        <div className='setPassword_wrap'>
                            <label className='setPassword_label'>New Password</label>
                            <div className='setPassword_inputSec'>
                                <img src={lockIcon} alt="lockIcon" className='lockIcon' />
                                <input value={pass} type={eyeIcon === false ? "password" : "text"} placeholder='New Password' onChange={(e) => setPass(e.target.value)} />
                                <i
                                    onClick={() => setEyeIcon(!eyeIcon)}
                                    className={
                                        eyeIcon === false
                                            ? "fa-regular showEye fa-eye-slash"
                                            : "fa-regular showEye fa-eye"
                                    }
                                ></i>

                            </div>

                            <br />
                            <label className='setPassword_label'>Confirm Password</label>
                            <div className='setPassword_inputSec'>
                                <img src={lockIcon} alt="lockIcon" className='lockIcon' />
                                <input value={cPass} type={eyeIcon2 === false ? "password" : "text"} placeholder='Confirm Password' onChange={(e) => setCpass(e.target.value)} />
                                <i
                                    onClick={() => setEyeIcon2(!eyeIcon2)}
                                    className={
                                        eyeIcon2 === false
                                            ? "fa-regular showEye fa-eye-slash"
                                            : "fa-regular showEye fa-eye"
                                    }
                                ></i>
                            </div>
                            <div className='setPassword_update'>
                                <button onClick={handleUpdate}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword