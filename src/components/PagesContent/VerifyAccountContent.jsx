import React, { useState } from 'react'
import logo from "../../assets/images/Admin-20 (89).png"
import Thankyou from '../../components/Modals/Thankyou'
import AccountVerificationForm from '../../components/Forms/AccountVerificationForm'
import HidePage from '../../hoc/HidePage'

const VerifyAccountContent = () =>
{
    const [modal, setModal] = useState("");

    return (
        <HidePage>
            {modal === 'verify' && <Thankyou setModal={setModal} />}
            <div className="verify">
                <div className="verify_header">
                    <p className="verify_title">Let’s verify your account at 86 kitch’n partner center</p>
                    <img width={150} src={logo} alt='' />
                </div>
                <div className="container">
                    <AccountVerificationForm setModal={setModal} />
                </div>
            </div>
        </HidePage>
    )
}

export default VerifyAccountContent