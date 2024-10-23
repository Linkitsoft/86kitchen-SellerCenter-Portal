import React, { useState } from 'react'
import Image from '../../assets/images/Marketplace-Assets-40.png'

const AdSlotManagementHistoryTable = ({ status, setModal, data }) => {
    const header = ['S.No', 'Name', 'Image', 'Bid Start Date', 'Bid End Date', 'Slot Type', 'Bid Amount', 'Approval Status', '']

    return (
        <div className='eventTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                    {data?.filter(res => res.status === status)?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item?.no}</td>
                                <td>{item?.name}</td>
                                <td >
                                    <img
                                        onClick={() => setModal("view")}
                                        alt=""
                                        src={Image}
                                        className='w-12'
                                        height={"48px"}
                                        width={"56px"}
                                        style={{ borderRadius: "10px", overflow: "hidden", cursor: "pointer" }}
                                    />
                                </td>
                                <td>{item?.start} </td>
                                <td>{item?.end} </td>
                                <td>{item?.type}</td>
                                <td>$ {item?.amount}</td>
                                <td style={{ color: "red", fontWeight: "bold" }}>{item?.status}</td>
                                <td className='eventTable_viewBtn'>
                                    <button className='generateBtn' onClick={() => setModal('create')}>Rebid Now</button>
                                </td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default AdSlotManagementHistoryTable
