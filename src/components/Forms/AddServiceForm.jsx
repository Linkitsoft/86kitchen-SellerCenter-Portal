import React, { useState } from 'react'
import star from "../../assets/images/Admin-20 (20).png"
import backImg from "../../assets/images/Admin-20 (29).png"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { serviceValidation } from '../../validationSchema'
import InputField from '../InputField/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver from @hookform/resolvers/yup
import DropdownField from '../InputField/DropdownField';
import UploadImg from '../UploadImage';

const AddServiceForm = () => {
    const navigate = useNavigate()
    const [banner, setBanner] = useState(null);
    const { control, handleSubmit, register, trigger, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            category: '',
            price: '',
            item: '',
            description: '',
            commission: null,
        },
        mode: 'onBlur',
        resolver: yupResolver(serviceValidation)
    })
    const handleFileChange = (event, type) => {
        UploadImg(event, setBanner)
    };

    const handleBlur = async (fieldName) => {
        try {
            await trigger(fieldName);
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = (values) => {
        toast.success("Service added successfully")
    };
    return (
        <>
            <>
                <div className="addServ_header">
                    <p className="addServ_title"><img src={backImg} alt='' onClick={() => navigate(-1)} />Add Services</p>
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
                                {banner && <img className="addServ_file" src={banner} alt='' />}
                                {banner && <i className="fa-solid fa-trash" onClick={() => setBanner(null)}></i>}
                            </div>
                            <div className="addServ_validationBox" >
                                {!banner && <div className="verify_err" >Image is required</div>}
                                <p style={{ fontSize: "12px" }}>Recommended Image type : <span style={{ fontWeight: "700" }}>JPG , JPEG , PNG</span></p>
                                <p style={{ fontSize: "12px" }}>Recomended resolution banner : <span style={{ fontWeight: "700" }}>1024 * 1024</span></p>
                                <p style={{ fontSize: "12px" }}>Image Size limit : <span style={{ fontWeight: "700" }}>10 MB</span></p>
                            </div>
                        </div>
                        <div className="addServ_form">
                            <InputField
                                label='Service Name'
                                placeholder='Service name'
                                name='name'
                                errors={errors?.name}
                                control={control}
                                handleBlur={handleBlur}
                                register={register}
                            />
                            <DropdownField
                                label='Service Category'
                                placeholder='Service Category'
                                name='category'
                                errors={errors?.category}
                                control={control}
                                handleBlur={handleBlur}
                                register={register}
                                options={[{ label: "Fiber", value: "Storm Fiber" }]}
                            />
                            <InputField
                                label='Total Price'
                                placeholder='Enter total price'
                                name='price'
                                type='number'
                                errors={errors?.price}
                                control={control}
                                handleBlur={handleBlur}
                                register={register}
                            />
                        </div>
                        <div className="addServ_form">
                            <DropdownField
                                label='Choose Recommended Items'
                                placeholder='Recommended Items'
                                name='item'
                                errors={errors?.item}
                                control={control}
                                handleBlur={handleBlur}
                                register={register}
                                options={[{ label: "Fiber", value: "Storm Fiber" }]}
                            />
                            <InputField
                                label='Service Description'
                                placeholder='Service Description'
                                name='description'
                                errors={errors?.description}
                                control={control}
                                handleBlur={handleBlur}
                                register={register}
                            />
                            <InputField
                                label='Commission'
                                placeholder='Commission'
                                type='number'
                                name='commission'
                                errors={errors?.commission}
                                control={control}
                                handleBlur={handleBlur}
                                register={register}
                            />
                        </div>
                        <div className="addServ_submit">
                            <button onClick={handleSubmit(onSubmit)}>Add</button>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default AddServiceForm