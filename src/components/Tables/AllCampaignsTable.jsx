import React, { useState } from 'react'
import Image from '../../assets/images/Marketplace-Assets-40.png'
import { dateFormat } from '../../utils/dateFormat'
const AllCampaignsTable = ({ setModal, status, setViewModal, setItem }) => {


    const header = [
        'No', 'Created Date', 'Image',
        'Title ', 'Type ', 'Coupon Code ',
        'Campaign Day(s)', 'Approval Status', 'Status', "Details"]

    const [campaign, setCampaign] = useState([
        {
            no: "1",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "Vision Quest",
            color: "blue",
            type: "Top Section",
            requestedDate: "5/7/2024",
            acceptedDate: "5/7/2024",
            rejectedDate: "5/7/2024",
            startDate: "5/22/2024",
            endDate: "6/7/2024",
            timeDuration: "15 Days",
            acceptReject: "Rejected",
            status: "-"

        },
        {
            no: "2",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "Echoes of Eternity",
            color: "blue",
            type: "Middle Section",
            requestedDate: "4/7/2024",
            acceptedDate: "5/7/2024",
            rejectedDate: "5/7/2024",
            timeDuration: "15 Days",
            startDate: "4/22/2024",
            endDate: "5/7/2024",
            acceptReject: "Accepted",
            status: "Expired"
        },
        {
            no: "3",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "Unity in Motion",
            color: "red",
            type: "Top Section",
            requestedDate: "5/7/2024",
            acceptedDate: "5/7/2024",
            rejectedDate: "5/7/2024",
            timeDuration: "9 Days",
            startDate: "6/29/2024",
            endDate: "7/7/2024",
            acceptReject: "Accepted",
            status: "Upcoming"
        },
        {
            no: "4",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "Seeds of Tomorrow",
            color: "blue",
            type: "Middle Section",
            requestedDate: "1/6/2024",
            acceptedDate: "3/6/2024",
            rejectedDate: "5/7/2024",
            timeDuration: "7 Days",
            startDate: "5/22/2024",
            endDate: "5/28/2024",
            acceptReject: "Accepted",
            status: "Ongoing"
        },

    ])

    const itemHandler = (item) => {
        const newItem = {
            title: item?.title,
            couponCode: item?.couponCode,
            startDate: item?.startDate,
            endDate: item?.endDate,
            [item?.acceptReject === "Accepted" ? "acceptedDate " : "rejectedDate"]: item?.rejectedDate,
            campaignsDay: item?.timeDuration
        };

        setViewModal(true);
        setItem(newItem);
    };

    return (
        <div className='eventTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                    {campaign.filter(res => status === "All" || res.status === status)?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{dateFormat(item?.requestedDate)}</td>
                                <td >
                                    <img
                                        onClick={() => setModal("view")}
                                        alt=""
                                        src={Image}
                                        className='w-[70px] h-[40px]'
                                        style={{ borderRadius: "10px", overflow: "hidden", cursor: "pointer" }}
                                    />
                                </td>
                                <td title={item?.title} style={{ cursor: "pointer", }}>
                                    {item?.title}
                                </td>
                                <td>{item?.type}</td>
                                <td>{item?.couponCode}</td>
                                {/* <td >{item?.acceptedDate}</td> */}
                                <td>{item?.timeDuration}</td>
                                <td style={{ fontWeight: "bold", color: item?.acceptReject == "Rejected" ? 'red' : "green" }}>{item?.acceptReject}</td>
                                <td style={{ fontWeight: "bold", color: item?.status == "Expired" ? 'red' : (item?.status == "Ongoing" ? "green" : "blue") }}>
                                    {item?.status}</td>
                                {/* <td>
                                    <label className="switch">
                                        <input
                                            // onChange={() => handleToggler(res)}
                                            type="checkbox"
                                        // checked={res?.isActive === true ? true : false}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </td> */}
                                <td className='eventTable_viewBtn'>
                                    <button className='generateBtn' onClick={() => itemHandler(item)}>View</button>
                                </td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default AllCampaignsTable
