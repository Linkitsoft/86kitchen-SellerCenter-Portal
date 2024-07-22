import React, { useEffect, useRef } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside';
import bg from "../../assets/images/Admin-20 (22).png"
import { useNavigate } from 'react-router-dom';
import RoleAccess from '../../hoc/RoleAccess';
import useUserRole from '../../hooks/useUserRole';
const ViewService = ({ service, setModal }) =>
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
                <div className='viewService_head'>{service?.name}</div>
                <p className='viewService_desc'>{service?.description}</p>
                <div className='viewService_cost'>
                    <p>Total Cost:</p>
                    <p>${service?.price}</p>
                </div>
                <div className='viewService_cost'>
                    <p>Commission:</p>
                    <p>{service?.commission ? `${service?.commission}%` : "-"}</p>
                </div>
                <p className='viewService_err'>Your request to change the commission by 25% is currently pending approval from the super admin</p>
                <div className='viewService_order'>
                    <p>Total Orders:</p>
                    <p>-</p>
                </div>
                <RoleAccess role={roles.create}>
                    <button onClick={() => navigate(`/editService?serviceId=${service?.id}`)} className='viewService_btn'>Edit</button>
                </RoleAccess>
            </div>
        </div>
    )
}

export default ViewService