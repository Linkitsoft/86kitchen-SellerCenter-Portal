import React, { useState } from 'react'
import Image from '../../assets/images/Marketplace-Assets-40.png'

const AdSlotManagementTable = ({ status, setModal, data }) => {
    const header = ['S.No', 'Name', 'Image', 'Bid Start Date', 'Bid End Date', 'Slot Type', 'Bid Amount', 'Approval Status']

    return (
        <div className='eventTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                    {data?.filter(res => status === "All" || res.status === status)?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item?.no}</td>
                                <td>{item?.name}</td>
                                <td >
                                    <img
                                        alt=""
                                        src={Image}
                                        className='w-[70px] h-[40px]'
                                        style={{ borderRadius: "10px", overflow: "hidden", }}
                                    />
                                </td>
                                <td>{item?.start} </td>
                                <td>{item?.end} </td>
                                <td>{item?.type}</td>
                                <td>$ {item?.amount}</td>
                                <td style={{ color: "green", fontWeight: "bold" }}>{item?.status}</td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default AdSlotManagementTable
