import React from 'react'
import tick from "../../assets/images/Admin-20 (50).png"


const Success = ({ handleLogin }) => {
    return (
        <div className='success'>
            <div className='success_inner'>
                <img src={tick} alt="greenTick" />
                <p>Successfully Verified</p>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}
export default Success

