import React from 'react'
import footerImg from "../../assets/images/Admin-20 (89).png"

const Footer = ({ bottomView }) => {
    return (
        <div style={{ position: bottomView === true && "relative" }} className='footer'>
            <div>
                <img src={footerImg} alt="footerImg" />
                <p>Powered by KPJ Healthcare</p>
            </div>
        </div>
    )
}

export default Footer