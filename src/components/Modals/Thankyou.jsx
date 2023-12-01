import React, { useEffect, useRef } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside';
import { toast } from 'react-toastify';
import tick from "../../assets/images/Admin-20 (50).png"

const Thankyou = ({ setModal }) =>
{
    const Ref = useRef();
    const Ref2 = useRef();

    const handleAdd = () =>
    {
        setModal("")
    }


    useEffect(() =>
    {
        Clickoutside(Ref, Ref2, setModal)
        // eslint-disable-next-line
    }, []);

    return (
        <div ref={Ref} className='addCat'>
            <div ref={Ref2} className='addCat_inner'>
                <div className='addCat_thanks'>
                    <img className='addCat_tick' src={tick} alt='' />
                    <p className='addCat_msg'>Thank you for verifying your account</p>
                    <p className='addCat_text'>Admin will review and approve your profile</p>
                    <button onClick={handleAdd} className='addCat_ok'>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default Thankyou