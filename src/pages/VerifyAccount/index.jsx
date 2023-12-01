import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import logo from "../../assets/images/Admin-20 (89).png"
import star from "../../assets/images/Admin-20 (20).png"
import Thankyou from '../../components/Modals/Thankyou'

const VerifyAccount = () =>
{
    const [banner, setBanner] = useState(null);
    const [profile, setProfile] = useState(null);
    const [front, setFront] = useState(null);
    const [back, setBack] = useState(null);
    const [modal, setModal] = useState("");

    console.log("profile", profile)
    const handleFileChange = (event, type) =>
    {
        console.log("type", type)
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
                } else if (fileType === 'profile')
                {
                    setProfile({
                        file: file,
                        previewURL: reader.result,
                    });
                } else if (fileType === 'front')
                {
                    setFront({
                        file: file,
                        previewURL: reader.result,
                    });
                } else if (fileType === 'back')
                {
                    setBack({
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
            } else if (type === 'profile')
            {
                setProfile(null);

            } else if (type === 'front')
            {
                setFront(null);
            } else if (type === 'back')
            {
                setBack(null);
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
                        <div className="verify_header">
                            <p className="verify_title">Let’s verify your account at 86 kitch’n seller center</p>
                            <img width={150} src={logo} alt='' />
                        </div>
                        <div className="container">
                            <div className="verify_top">
                                <div className="verify_left">
                                    <p className="verify_subhead">Personal Details</p>
                                    <div className="verify_form">
                                        <div>
                                            <p>First Name</p>
                                            <input type='text' placeholder='Enter first name' />
                                        </div>
                                        <div>
                                            <p>Last Name</p>
                                            <input type='text' placeholder='Enter last name' />
                                        </div>
                                    </div>
                                    <div className="verify_form">
                                        <div>
                                            <p>Email</p>
                                            <input type='text' placeholder='Enter email' />
                                        </div>
                                        <div>
                                            <p>Password</p>
                                            <input type='password' placeholder='Enter password' />
                                        </div>
                                    </div>
                                    <div className="verify_form">
                                        <div>
                                            <p>Confirm Password</p>
                                            <input type='password' placeholder='Enter confirm password' />
                                        </div>
                                    </div>
                                </div>
                                <div className="verify_left">
                                    <p className="verify_subhead">Business Location</p>
                                    <div className="verify_form">
                                        <div>
                                            <p>Address 1</p>
                                            <input type='text' placeholder='Enter address' />
                                        </div>
                                        <div>
                                            <p>Address 2 (optional)</p>
                                            <input type='text' placeholder='Enter address' />
                                        </div>
                                    </div>
                                    <div className="verify_form">
                                        <div>
                                            <p>City</p>
                                            <input type='text' placeholder='Enter city name' />
                                        </div>
                                        <div>
                                            <p>State</p>
                                            <input type='text' placeholder='Enter state' />
                                        </div>
                                    </div>
                                    <div className="verify_form">
                                        <div>
                                            <p>Zip Code</p>
                                            <input type='number' placeholder='Enter zip code' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="verify_top">
                                <div className="verify_left">
                                    <p className="verify_subhead">Business Details</p>
                                    <div>
                                        <div className="verify_uploadSec">
                                            {!banner &&
                                                <label htmlFor="bannerInput">
                                                    <img className="verify_mini" src={star} alt='' />
                                                </label>}
                                            <input type="file" id="bannerInput" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, 'banner')} />
                                            {banner && <img className="verify_file" src={banner?.previewURL} alt='' />}
                                            {banner && <i className="fa-solid fa-trash" onClick={() => setBanner(null)}></i>}
                                        </div>
                                    </div>
                                    <div className="verify_upload">
                                        <div className="verify_roundSec">
                                            {!profile &&
                                                <label htmlFor="logoInput">
                                                    <img className="verify_miniR" src={star} alt='' />
                                                </label>}
                                            <input type="file" id="logoInput" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, 'profile')} />
                                            {profile && <img className="verify_fileR" src={profile?.previewURL} alt='' />}
                                            {profile && <i className="fa-solid fa-trash" onClick={() => setProfile(null)}></i>}
                                        </div>
                                    </div>
                                    <div className="verify_form">
                                        <div>
                                            <p>Business Name</p>
                                            <input type='text' placeholder='Enter business name' />
                                        </div>
                                        <div>
                                            <p>Tax ID</p>
                                            <input type='text' placeholder='Enter tax ID' />
                                        </div>
                                    </div>
                                    <div className="verify_form">
                                        <div>
                                            <p>Business Phone Number</p>
                                            <input type='number' placeholder='Enter business phone number' />
                                        </div>
                                        <div>
                                            <p>Business URL (Optional)</p>
                                            <input type='password' placeholder='Enter business URL' />
                                        </div>
                                    </div>
                                </div>
                                <div className="verify_left">
                                    <p className="verify_subhead">Scanned copy of legal person ’s ID card</p>
                                    <p className="verify_info">(You can scan pictures or photos, just make sure they are clearly visible)</p>
                                    <div className="">
                                        <div className="verify_multi">
                                            <div className="verify_uploadSec">
                                                {!front &&
                                                    <label htmlFor="frontInput">
                                                        <img className="verify_mini" src={star} alt='' />
                                                    </label>}
                                                <input type="file" id="frontInput" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, 'front')} />
                                                {front && <img className="verify_file" src={front?.previewURL} alt='' />}
                                                {front && <i className="fa-solid fa-trash" onClick={() => setFront(null)}></i>}
                                                <p style={{ margin: "25px" }}>Front of ID card</p>
                                            </div>
                                            <div className="verify_uploadSec">
                                                {!back &&
                                                    <label htmlFor="backInput">
                                                        <img className="verify_mini" src={star} alt='' />
                                                    </label>}
                                                <input type="file" id="backInput" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, 'back')} />
                                                {back && <img className="verify_file" src={back?.previewURL} alt='' />}
                                                {back && <i className="fa-solid fa-trash" onClick={() => setBack(null)}></i>}
                                                <p style={{ margin: "25px" }}>Back of ID Card</p>
                                            </div>
                                        </div>
                                        <div className="verify_submit">
                                            <button onClick={() => setModal('verify')}>SUBMIT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyAccount