import React, { useState } from 'react'
import star from "../../assets/images/Admin-20 (20).png"
import { verifyValidation } from '../../validationSchema'
import InputField from '../InputField/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Verify } from '../../Services/Partner';
import UploadImg from '../../utils/UploadImg';

const AccountVerificationForm = ({ userDetails, setModal }) =>
{
    // const [banner, setBanner] = useState(null);
    // const [profile, setProfile] = useState(null);
    // const [front, setFront] = useState(null);
    // const [back, setBack] = useState(null);
    const navigate = useNavigate()
    const [banner, setBanner] = useState(userDetails?.businessImage ? userDetails?.businessImage : "")
    const [profile, setProfile] = useState(userDetails?.businessLogo ? userDetails?.businessLogo : "")
    const [front, setFront] = useState(userDetails?.resaleCertificate ? userDetails?.resaleCertificate : "")
    const [back, setBack] = useState(userDetails?.businessLicense ? userDetails?.businessLicense : "")
    const [bannerLoad, setBannerLoad] = useState(false)
    const [profileLoad, setProfileLoad] = useState(false)
    const [frontLoad, setFrontLoad] = useState(false)
    const [backLoad, setBackLoad] = useState(false)
    const isDisabled = userDetails?.status === 1;

    const defaultValues = {
        firstName: userDetails?.firstName,
        lastName: userDetails?.lastName,
        address1: userDetails?.address1,
        address2: userDetails?.address2,
        city: userDetails?.city,
        phone: userDetails?.phone,
        state: userDetails?.state,
        zipCode: userDetails?.zipCode,
        businessName: userDetails?.businessName,
        taxId: userDetails?.taxId,
        businessPhone: userDetails?.businessPhone,
        businessUrl: userDetails?.businessUrl,
    }

    console.log("defaultValues", defaultValues)
    const values = {
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        phone: "",
        state: "",
        zipCode: "",
        businessName: "",
        taxId: "",
        businessPhone: "",
        businessUrl: "",
    }

    const { control, handleSubmit, register, trigger, formState: { errors } } = useForm({
        defaultValues: userDetails?.status === 1 ? defaultValues : values,
        mode: 'onBlur',
        resolver: yupResolver(verifyValidation)
    })

    const handleFileChange = (event, fileType) =>
    {
        if (fileType === 'banner')
        {
            UploadImg(event, setBanner, setBannerLoad)
        } else if (fileType === 'profile')
        {
            UploadImg(event, setProfile, setProfileLoad)
        } else if (fileType === 'front')
        {
            UploadImg(event, setFront, setFrontLoad)
        } else if (fileType === 'back')
        {
            UploadImg(event, setBack, setBackLoad)
        }
    };

    const onSubmit = async (values) =>
    {
        if (profile && banner && front && back)
        {
            const body = {
                businessLogo: profile,
                businessImage: banner,
                resaleCertificate: front,
                businessLicense: back,
                ...values,
                status: 1
            }

            const res = await Verify(body)
            if (res?.data?.status === 'success')
            {
                toast.success("Partner Created Successfully")
                setModal('verify')
                setTimeout(() =>
                {
                    navigate(-1)
                }, 300)
            }
            if (res?.data?.status === 'exists')
            {
                toast.error("Email already exists")
            }
            if (res?.data?.status === 'fail')
            {
                toast.error("Some rror occurred")
            }
        } else
        {
            toast.warning("Please fill out all fields")
        }
    };

    const handleBlur = async (fieldName) =>
    {
        try
        {
            await trigger(fieldName);
        } catch (error)
        {
            console.error(error);
        }
    };
    return (
        <>
            <div className="verify_top">
                <div className="verify_left">
                    <p className="verify_subhead">Personal Details</p>
                    <div className="verify_form">
                        <InputField
                            label='First Name'
                            placeholder='First Name'
                            name='firstName'
                            errors={errors?.firstName}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                            disabled={isDisabled}
                        />
                        <InputField
                            label='Last Name'
                            placeholder='Last Name'
                            name='lastName'
                            errors={errors?.lastName}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                            disabled={isDisabled}
                        />
                    </div>
                    <div className="verify_form">
                        {/* <InputField
                            label='Email'
                            placeholder='Email'
                            name='email'
                            errors={errors?.email}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                        /> */}
                        {/* <InputField
                            label='Password'
                            placeholder='Password'
                            name='password'
                            errors={errors?.password}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                        /> */}
                    </div>
                    <div className="verify_form">
                        {/* <InputField
                            label='Confirm Password'
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            errors={errors?.confirmPassword}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                        /> */}
                        {/* <InputField
                            label='Email'
                            placeholder='Email'
                            name='email'
                            errors={errors?.email}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                        /> */}
                    </div>
                </div>
                <div className="verify_left">
                    <p className="verify_subhead">Business Location</p>
                    <div className="verify_form">
                        <InputField
                            label='Address1'
                            placeholder='Address1'
                            name='address1'
                            errors={errors?.address1}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                            disabled={isDisabled}
                        />
                        <div>
                            <InputField
                                label='Address 2 (optional)'
                                placeholder='Address2'
                                name='address2'
                                control={control}
                                handleBlur={handleBlur}
                                register={register}
                                disabled={isDisabled}
                            />
                        </div>
                    </div>
                    <div className="verify_form">
                        <InputField
                            label='city'
                            placeholder='city'
                            name='city'
                            errors={errors?.city}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                            disabled={isDisabled}

                        />
                        <InputField
                            label='State'
                            placeholder='State'
                            name='state'
                            errors={errors?.state}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                            disabled={isDisabled}

                        />
                    </div>
                    <div className="verify_form">
                        <InputField
                            label='Zip Code'
                            placeholder='Zip Code'
                            name='zipCode'
                            errors={errors?.zipCode}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                            disabled={isDisabled}

                        />
                    </div>
                </div>
            </div>
            <div className="verify_top">
                <div className="verify_left">
                    <p className="verify_subhead">Business Details</p>
                    <div className='verify_leftBoxProfile'>
                        <div className="verify_upload">
                            <div className="verify_roundSec">
                                {!profile &&
                                    <label htmlFor="logoInput">
                                        <img className="verify_miniR1" src={star} alt='' />
                                    </label>}
                                <input type="file" id="logoInput" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, 'profile')} />
                                {profile && <img className="verify_fileR" src={profile} alt='' />}
                                {(profile && !isDisabled) && <i className="fa-solid fa-trash verify_deleteIcon " onClick={() => setProfile(null)}></i>}
                            </div>
                        </div>
                        <div>
                            {profileLoad && <p className='verify_err'>Please wait...</p>}
                            <p style={{ fontSize: "12px" }}>Recommended Image type : <span style={{ fontWeight: "700" }}>JPG , JPEG , PNG</span></p>
                            <p style={{ fontSize: "12px" }}>Recomended resolution banner : <span style={{ fontWeight: "700" }}>1024 * 1024</span></p>
                            <p style={{ fontSize: "12px" }}>Image Size limit : <span style={{ fontWeight: "700" }}>10 MB</span></p>
                        </div>
                    </div>
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
                            {banner && <img className="verify_file" src={banner} alt='' />}
                            {(banner && !isDisabled) && (
                                <i className="fa-solid fa-trash" onClick={() => setBanner(null)}></i>
                            )}

                        </div>
                        {bannerLoad && <p className='verify_err'>Please wait...</p>}
                        <p style={{ fontSize: "12px" }}>Recommended Image type : <span style={{ fontWeight: "700" }}>JPG , JPEG , PNG</span></p>
                        <p style={{ fontSize: "12px" }}>Recomended logo : <span style={{ fontWeight: "700" }}>1024 * 1024</span></p>
                        <p style={{ fontSize: "12px" }}>Image Size limit : <span style={{ fontWeight: "700" }}>10 MB</span></p>
                    </div>


                    <div className="verify_form" style={{ marginTop: "30px" }}>
                        <InputField
                            label='Business Name'
                            placeholder='Business Name'
                            name='businessName'
                            errors={errors?.businessName}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                            disabled={isDisabled}

                        />
                        <InputField
                            label='Tax Id'
                            placeholder='Tax Id'
                            name='taxId'
                            errors={errors?.taxId}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                            disabled={isDisabled}

                        />
                    </div>
                    {/* <div className="verify_form">
                        <div>
                            <p>Business URL (Optional)</p>
                            <input type='text' placeholder='Enter business URL' />
                        </div>
                    </div> */}
                    <div className="verify_form" style={{ marginTop: "30px" }}>
                        <InputField
                            label='Business Phone'
                            placeholder='Business Phone'
                            name='businessPhone'
                            errors={errors?.businessPhone}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                            disabled={isDisabled}

                        />
                        <div>
                            <InputField
                                label='Business URL (Optional)'
                                placeholder='Business URL'
                                name='businessUrl'
                                control={control}
                                handleBlur={handleBlur}
                                register={register}
                                disabled={isDisabled}

                            />
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
                                {front && <img className="verify_file" src={front} alt='' />}
                                {(front && !isDisabled) && <i className="fa-solid fa-trash" onClick={() => setFront(null)}></i>}
                                {frontLoad && <p className='verify_err'>Please wait...</p>}
                                <p style={{ margin: "25px 25px 0 25px" }}>Front of ID card</p>
                                <p style={{ fontSize: "12px" }}>Recommended Image type : <span style={{ fontWeight: "700" }}>JPG , JPEG , PNG</span></p>
                                <p style={{ textAlign: "center", fontSize: "12px" }}>Recomended resolution ID Card: <span style={{ fontWeight: "700" }}>1024 * 1024</span></p>
                                <p style={{ textAlign: "center", fontSize: "12px" }}>Image Size limit : <span style={{ fontWeight: "700" }}>10 MB</span></p>
                            </div>
                            <div className="verify_uploadSec">
                                {!back &&
                                    <label htmlFor="back">
                                        <img className="verify_mini" src={star} alt='' />
                                    </label>}
                                <input name="back" type="file" id="back" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, 'back')} />
                                {back && <img className="verify_file" src={back} alt='' />}
                                {(back && !isDisabled) && <i className="fa-solid fa-trash" onClick={() => setBack(null)}></i>}
                                {backLoad && <p className='verify_err'>Please wait...</p>}
                                <p style={{ margin: "25px 25px 0 25px" }}>Back of ID Card</p>
                                <p style={{ fontSize: "12px" }}>Recommended Image type : <span style={{ fontWeight: "700" }}>JPG , JPEG , PNG</span></p>
                                <p style={{ textAlign: "center", fontSize: "12px" }}>Recomended resolution ID Card: <span style={{ fontWeight: "700" }}>1024 * 1024</span></p>
                                <p style={{ textAlign: "center", fontSize: "12px" }}>Image Size limit : <span style={{ fontWeight: "700" }}>10 MB</span></p>
                            </div>
                        </div>
                        {!isDisabled &&
                            <div className="verify_submit" style={{}}>
                                <button onClick={handleSubmit(onSubmit)}>SUBMIT</button>
                            </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountVerificationForm