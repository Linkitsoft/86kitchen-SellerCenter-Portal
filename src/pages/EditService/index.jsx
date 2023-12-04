import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import star from "../../assets/images/Admin-20 (20).png"
import Thankyou from '../../components/Modals/Thankyou'
import backImg from "../../assets/images/Admin-20 (29).png"
import { useNavigate } from 'react-router-dom'

const EditService = () =>
{
    const [banner, setBanner] = useState(null);
    const [modal, setModal] = useState("");
    const navigate = useNavigate()

    const handleFileChange = (event, type) =>
    {
        const file = event.target.files[0];

        if (file)
        {
            const reader = new FileReader();
            reader.onloadend = () =>
            {
                const fileType = type;

                if (fileType === 'banner')
                {
                    setBanner({
                        file: file,
                        previewURL: reader.result,
                    });
                }

            };
            reader.readAsDataURL(file);
        } else
        {
            if (type === 'banner')
            {
                setBanner(null);
            } 
        }
    };

    return (
        <div>
            <div className="mainLayout">
                {modal === 'verify' && <Thankyou setModal={setModal} />}
                <div className="mainLayout_parent">
                    <Sidebar index={"-1"} />
                    <div className="verify">
                        <div className="addServ_header">
                            <p className="addServ_title"><img src={backImg} alt='' onClick={() => navigate(-1)}/>Edit Service</p>
                        </div>
                        <div className="addServ_service">
                            <div className="addServ_serviceMain">
                                <p className="addServ_subhead">Service Image</p>
                                <div>
                                    <div className="addServ_uploadSec">
                                        {!banner &&
                                            <label htmlFor="bannerInput">
                                                <img className="addServ_mini" src={star} alt='' />
                                            </label>}
                                        <input type="file" id="bannerInput" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, 'banner')} />
                                        {banner && <img className="addServ_file" src={banner?.previewURL} alt='' />}
                                        {banner && <i className="fa-solid fa-trash" onClick={() => setBanner(null)}></i>}
                                    </div>
                                </div>
                                <div className="addServ_form">
                                    <div>
                                        <p>Service Name</p>
                                        <input type='text' placeholder='Enter business name' />
                                    </div>
                                    <div>
                                        <p>Service Category</p>
                                        <input type='text' placeholder='Enter tax ID' />
                                    </div>
                                    <div>
                                        <p>Total Price</p>
                                        <input type='number' placeholder='Enter total price' />
                                    </div>
                                </div>
                                <div className="addServ_form">
                                    <div>
                                        <p>Choose Recommended Items</p>
                                        <input type='text' placeholder='Choose recommended items' />
                                    </div>
                                    <div>
                                        <p>Service Description</p>
                                        <input type='text' placeholder='Service description' />
                                    </div>
                                </div>
                                <div className="addServ_submit">
                                    <button>Update</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditService
