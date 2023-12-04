import React from 'react'
import logoImg from "../../assets/images/Admin-20 (75).png";
import { Link } from 'react-router-dom';

const Topbar = () =>
{
    return (
        <div className="topbar">
            <div className="container">
                <div className="topbar_content">
                    <div className="topbar_left">
                        <img
                            className="topbar_logo"
                            src={logoImg}
                            alt="logo"
                        // onClick={() => handleRoute("")}
                        />
                    </div>
                    <div className="topbar_right">
                        <Link>Sign Up</Link>
                        <Link to='/login'>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar