import React, { useState } from 'react'
import { adSlotData } from '../../utils/adSlotData'
import Image from '../../assets/images/Marketplace-Assets-40.png'

const AdSlotManagementTable = ({ status, setModal }) => {
    const header = ['S.No', 'Name', 'Image', 'Bit Start Date', 'Bit End Date', 'Slot Type', 'Bit Amount', "Click (CTR)", 'Approval Status']

    return (
        <div className='eventTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                    {adSlotData?.filter(res => status === "All" || res.status === status)?.map((item, index) => {
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
                                <td>4%</td>
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
