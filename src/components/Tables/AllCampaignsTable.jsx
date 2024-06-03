import React from 'react'
import { usersData } from '../../utils/usersData';
import Image from '../../assets/images/Marketplace-Assets-40.png'
const AllCampaignsTable = ({ setModal }) => {
    const header = ['No', 'Image', 'Coupon Code ', 'Title ', 'Type ']

    const campaign = [
        {
            no: "1",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "Azx",
            color: "blue",
            type: "On Top"
        },
        {
            no: "2",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "Beron",
            color: "blue",
            type: "Middle"
        },
        {
            no: "3",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "Hanki Beton",
            color: "red",
            type: "On Top"
        },
        {
            no: "4",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "Azx",
            color: "blue",
            type: "Middle"
        },

    ]
    return (
        <div className='eventTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                    {campaign?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item?.no}</td>
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
                                <td>{item?.couponCode}</td>
                                <td title={item?.title} style={{ cursor: "pointer", }}>
                                    {item?.title}
                                </td>
                                <td>{item?.type}</td>
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
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default AllCampaignsTable
