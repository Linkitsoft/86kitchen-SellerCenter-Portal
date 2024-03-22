import React, { useEffect, useRef } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside';
import bg from "../../assets/images/Admin-20 (22).png"
import { useNavigate } from 'react-router-dom';
import RoleAccess from '../RoleAccess';
import useUserRole from '../../hooks/useUserRole';
const ViewService = ({ setModal }) =>
{
    const Ref = useRef();
    const Ref2 = useRef();
    const navigate = useNavigate()
    const roles = useUserRole()
    useEffect(() =>
    {
        Clickoutside(Ref, Ref2, setModal)
        // eslint-disable-next-line
    }, []);

    return (
        <div ref={Ref} className='viewService'>
            <div ref={Ref2} className='viewService_inner'>
                <p className='viewService_topHead'>Details</p>
                <img className='viewService_img' src={bg} alt='' />
                <div className='viewService_head'>Limited Time Offers</div>
                <p className='viewService_desc'>Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100</p>
                <div className='viewService_cost'>
                    <p>Total Cost:</p>
                    <p>$150</p>
                </div>
                <div className='viewService_cost'>
                    <p>Commission:</p>
                    <p>15%</p>
                </div>
                <div className='viewService_order'>
                    <p>Total Orders:</p>
                    <p>50</p>
                </div>
                <RoleAccess role={roles.create}>
                    <button onClick={() => navigate('/editService')} className='viewService_btn'>Edit</button>
                </RoleAccess>
            </div>
        </div>
    )
}

export default ViewService