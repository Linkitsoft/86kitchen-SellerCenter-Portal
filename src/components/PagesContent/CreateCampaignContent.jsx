import React, { useRef, useState } from 'react'
import star from "../../assets/images/Admin-20 (20).png"
import InputField from '../InputField/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { campaignValidation } from '../../validationSchema';
import uploadImg from "../../assets/images/Admin-20 (20).png"
import { toast } from 'react-toastify';
import DropdownField from '../InputField/DropdownField';
import { useEffect } from 'react';

const CreateCampaignContent = () => {

    const [img, setImg] = useState("")
    const Ref = useRef()
    const [coupoun, setCoupoun] = useState(null)

    const {
        control,
        handleSubmit,
        register,
        trigger,
        formState: { errors },
    } = useForm({
        defaultValues: {
            // couponCode: "",
            title: "",
            type: "",
        },
        mode: "onBlur",
        resolver: yupResolver(campaignValidation),
    });
    const handleImg = (e) => {
        const file = e?.target?.files[0]
        if (file?.size <= 10 * 1024 * 1024) {
            setImg(URL.createObjectURL(file))
            Ref.current.value = null
        } else {
            toast.warning("File size should be less than 10mb")
        }

    }
    const handleCreate = (value) => {
        console.log(value, "jkhjhkjhkj")
        if (img) {
            toast.success("Campaign Created Succesfully")
        }
    }
    const handleUpdate = (value) => {
        if (img) {
            toast.success("Campaign Updated Succesfully")
        }
    }
    const generateRefId = () => {
        // Logic to generate Referral ID
        const generatedId = Math.floor(1000 + Math.random() * 9000);
        // Set the generated ID to the refId field
        setCoupoun(generatedId);
    };
    const handleBlur = async (fieldName) => {
        try {
            await trigger(fieldName);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        generateRefId()
    }, [])
    return (
        <div className='createCampaign shadow'>
            <p className='createCampaign_title'>Create Compaign</p>
            <div className='createCampaign_addService'>
                <div className='createCampaign_lableSec'>
                    <p style={{}}>Campaign Image</p>
                    <div className='createCampaign_uploader'>
                        {img && <i onClick={() => setImg("")} class="fa-solid fa-trash"></i>}
                        <img className={img ? "fullImg" : "uploadImg"} src={img ? img : uploadImg} alt="uploadImg" />
                        <input type="file" accept="image/*" ref={Ref} onChange={(e) => handleImg(e)} />
                    </div>
                    <div>
                        {!img && <p className="createCampaign_error">Image is required</p>}
                        <p style={{ fontSize: "12px" }}>Recomended resolution : <span style={{ fontWeight: "700" }}>1024 * 1024</span></p>
                        <p style={{ fontSize: "12px" }}>Image Size limit : <span style={{ fontWeight: "700" }}>10 MB</span></p>
                    </div>
                </div>
                <div className='createCampaign_space'>
                    <div className='createCampaign_grid'>
                        <InputField
                            label='Title'
                            placeholder='Title'
                            name='title'
                            errors={errors?.title}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                        />

                        <DropdownField
                            label='Select Type'
                            placeholder='Select Type'
                            name='type'
                            errors={errors?.type}
                            control={control}
                            handleBlur={handleBlur}
                            register={register}
                            options={[{ label: "On Top", value: "On Top" }, { label: "Middle", value: "Middle" }]}
                        />
                    </div>

                    <div style={{ position: "relative", }} className='createCampaign_grid'>
                        <div className="fieldChild">
                            <label className='fieldChild_label'>Coupon Code</label>
                            <input style={{ width: "100%" }} placeholder="Coupon Code"
                                className='fieldChild_input' type="number" disabled={true} value={coupoun} name="couponCode" style={{ background: '#c9c9c9' }} />
                        </div>
                        <div className="fieldChild">
                            <label style={{ opacity: "0" }} className='fieldChild_label'>Coupon</label>
                            <button className='generateBtn' onClick={generateRefId}>Generate ID</button>
                        </div>
                    </div>
                </div>
                <div className='createCampaign_compaignBtn'>
                    <button className='generateBtn' onClick={handleSubmit(handleCreate)}>Create</button>
                </div>
            </div>
        </div >
    )
}

export default CreateCampaignContent