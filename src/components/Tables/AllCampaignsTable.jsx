import React from 'react'
import { usersData } from '../../utils/usersData';
import Image from '../../assets/images/Admin-20 (72).png'
const AllCampaignsTable = () => {
    const header = ['No', 'Image', 'Coupon Code ', 'Title ', 'Type ']

    const campaign = [
        {
            no: "1",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "john",
            type: "On Top"
        },
        {
            no: "2",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "john",
            type: "Middle"
        },
        {
            no: "3",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "john",
            type: "On Top"
        },
        {
            no: "4",
            image: "0121221234",
            couponCode: "234768FGJ",
            title: "john",
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
                                <td>
                                    <img
                                    alt =""
                                    src={Image}
                                    className='w-12'
                                    height={"48px"}
                                    />
                                </td>
                                <td>{item?.couponCode}</td>
                                <td>{item?.title}</td>
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
