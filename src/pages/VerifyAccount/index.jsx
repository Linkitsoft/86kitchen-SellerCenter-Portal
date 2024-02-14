import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import logo from "../../assets/images/Admin-20 (89).png"
import star from "../../assets/images/Admin-20 (20).png"
import Thankyou from '../../components/Modals/Thankyou'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { verifyValidation } from '../../validationSchema'

const VerifyAccount = () =>
{
    const [banner, setBanner] = useState(null);
    const [profile, setProfile] = useState(null);
    const [front, setFront] = useState(null);
    const [back, setBack] = useState(null);
    const [modal, setModal] = useState("");

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address1: '',
        city: '',
        state: '',
        zipCode: '',
        banner: '',
        logoInput: profile,
        businessName: '',
        taxId: '',
        businessPhone: '',
        front: '',
        back: '',
    };

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

    

    const onSubmit = (values) =>
    {
        console.log("value", values)
        setModal('verify')
    };

    return (
        <div>
            <div className="mainLayout">
                {modal === 'verify' && <Thankyou setModal={setModal} />}
                <div className="mainLayout_parent">
                    <Sidebar index={"-1"} />
                    <div className="verify">
                        <div className="verify_header">
                            <p className="verify_title">Let’s verify your account at 86 kitch’n partner center</p>
                            <img width={150} src={logo} alt='' />
                        </div>
                        <div className="container">
                            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={verifyValidation}>
                                <Form>
                                    <div className="verify_top">
                                        <div className="verify_left">
                                            <p className="verify_subhead">Personal Details</p>
                                            <div className="verify_form">
                                                <div>
                                                    <p htmlFor="firstName">First Name</p>
                                                    <Field placeholder="First Name" type="text" id="firstName" name="firstName" />
                                                    <ErrorMessage className="verify_err" name="firstName" component="div" />
                                                </div>
                                                <div>
                                                    <p htmlFor="lastName">Last Name</p>
                                                    <Field placeholder="Last Name" type="text" id="lastName" name="lastName" />
                                                    <ErrorMessage className="verify_err" name="lastName" component="div" />
                                                </div>
                                            </div>
                                            <div className="verify_form">
                                                <div>
                                                    <p htmlFor="email">Email</p>
                                                    <Field placeholder="Email" type="text" id="email" name="email" />
                                                    <ErrorMessage className="verify_err" name="email" component="div" />
                                                </div>
                                                <div>
                                                    <p htmlFor="password">Password</p>
                                                    <Field placeholder="Password" type="password" id="password" name="password" />
                                                    <ErrorMessage className="verify_err" name="password" component="div" />
                                                </div>
                                            </div>
                                            <div className="verify_form">
                                                <div>
                                                    <p htmlFor="confirmPassword">Confirm Password</p>
                                                    <Field placeholder="Confirm Password" type="password" id="confirmPassword" name="confirmPassword" />
                                                    <ErrorMessage className="verify_err" name="confirmPassword" component="div" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="verify_left">
                                            <p className="verify_subhead">Business Location</p>
                                            <div className="verify_form">
                                                <div>
                                                    <p htmlFor="address1">Address 1</p>
                                                    <Field placeholder="Address 1" type="text" id="address1" name="address1" />
                                                    <ErrorMessage className="verify_err" name="address1" component="div" />
                                                </div>
                                                <div>
                                                    <p>Address 2 (optional)</p>
                                                    <input type='text' placeholder='Enter address' />
                                                </div>
                                            </div>
                                            <div className="verify_form">
                                                <div>
                                                    <p htmlFor="city">City</p>
                                                    <Field placeholder="City" type="text" id="city" name="city" />
                                                    <ErrorMessage className="verify_err" name="city" component="div" />
                                                </div>
                                                <div>
                                                    <p htmlFor="state">State</p>
                                                    <Field placeholder="State" type="text" id="state" name="state" />
                                                    <ErrorMessage className="verify_err" name="state" component="div" />
                                                </div>
                                            </div>
                                            <div className="verify_form">
                                                <div>
                                                    <p htmlFor="zipCode">Zip Code</p>
                                                    <Field placeholder="Zip Code" type="text" id="zipCode" name="zipCode" />
                                                    <ErrorMessage className="verify_err" name="zipCode" component="div" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="verify_top">
                                        <div className="verify_left">
                                            <p className="verify_subhead">Business Details</p>
                                            <div>
                                                <div className="verify_uploadSec">
                                                    {!banner && (
                                                        <label htmlFor="banner">
                                                            <img className="verify_mini" src={star} alt='' />
                                                        </label>
                                                    )}
                                                    <input
                                                        type="file"
                                                        id="banner"
                                                        name="banner"
                                                        style={{ display: 'none' }}
                                                        onChange={(e) => handleFileChange(e, 'banner')}
                                                    />
                                                    {banner && <img className="verify_file" src={banner?.previewURL} alt='' />}
                                                    {banner && (
                                                        <i className="fa-solid fa-trash" onClick={() => setBanner(null)}></i>
                                                    )}
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
                                            {/* <div className="my-4">
                                                <ErrorMessage className="verify_err" name="banner" component="div" />
                                                <ErrorMessage className="verify_err" name="logoInput" component="div" />
                                            </div> */}

                                            <div className="verify_form" style={{ marginTop: "30px" }}>
                                                <div>
                                                    <p htmlFor="businessName">Business Name</p>
                                                    <Field placeholder="Business Name" type="text" id="businessName" name="businessName" />
                                                    <ErrorMessage className="verify_err" name="businessName" component="div" />
                                                </div>
                                                <div>
                                                    <p htmlFor="taxId">Tax ID</p>
                                                    <Field placeholder="Tax ID" type="text" id="taxId" name="taxId" />
                                                    <ErrorMessage className="verify_err" name="taxId" component="div" />
                                                </div>
                                            </div>
                                            <div className="verify_form">
                                                <div>
                                                    <p>Business URL (Optional)</p>
                                                    <input type='text' placeholder='Enter business URL' />
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
                                                            <label htmlFor="front">
                                                                <img className="verify_mini" src={star} alt='' />
                                                            </label>}
                                                        <input name="front" type="file" id="front" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, 'front')} />
                                                        {front && <img className="verify_file" src={front?.previewURL} alt='' />}
                                                        {front && <i className="fa-solid fa-trash" onClick={() => setFront(null)}></i>}
                                                        <p style={{ margin: "25px" }}>Front of ID card</p>
                                                    </div>
                                                    <div className="verify_uploadSec">
                                                        {!back &&
                                                            <label htmlFor="back">
                                                                <img className="verify_mini" src={star} alt='' />
                                                            </label>}
                                                        <input name="back" type="file" id="back" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, 'back')} />
                                                        {back && <img className="verify_file" src={back?.previewURL} alt='' />}
                                                        {back && <i className="fa-solid fa-trash" onClick={() => setBack(null)}></i>}
                                                        <p style={{ margin: "25px" }}>Back of ID Card</p>
                                                    </div>
                                                </div>                                               
                                                <div className="verify_submit">
                                                    <button type='submit'>SUBMIT</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyAccount