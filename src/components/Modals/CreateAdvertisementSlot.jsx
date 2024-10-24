import React, { useEffect, useRef, useState } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside';
import { toast } from 'react-toastify';
import InputField from '../InputField/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { advertisementValidation } from '../../validationSchema';
import uploadImg from "../../assets/images/Admin-20 (20).png"
import DropdownField from '../InputField/DropdownField';
import UploadImg from '../UploadImage';
import { useDateSelector } from '../../hooks/useDateSelector';
import CustomDatePicker from '../ReusableComponent/CustomDatePicker';
import CalenderAvailability from '../CalenderAvailability';

const CreateAdvertisementSlot = ({ setModal }) => {
    const [img, setImg] = useState("")
    const Ref = useRef()
    const Ref2 = useRef();
    const today = new Date().toISOString().split('T')[0];
    const [fromMonth, setFromMonth] = useState(new Date())
    const [toMonth, setToMonth] = useState(new Date())
    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()


    const {
        control,
        handleSubmit,
        register,
        trigger,
        formState: { errors },
    } = useForm({
        defaultValues: {
            slotType: null,
            product: null,
        },
        mode: "onBlur",
        resolver: yupResolver(advertisementValidation),
    });
    const handleImg = (e) => {
        UploadImg(e, setImg)

    }
    const handleCreate = (value) => {
        if (img) {
            toast.success("Advertisement Request Sent Succesfully")
            setModal("")
        }
    }

    const handleBlur = async (fieldName) => {
        try {
            await trigger(fieldName);
        } catch (error) {
            console.error(error);
        }
    };

    const handleMonthChangeFrom = (increment) => {
        setFromMonth(prevMonth => {
            const newMonth = new Date(prevMonth);
            newMonth.setMonth(prevMonth.getMonth() + increment);
            return newMonth;
        });
    };

    const handleMonthChangeTo = (increment) => {
        setToMonth(prevMonth => {
            const newMonth = new Date(prevMonth);
            newMonth.setMonth(prevMonth.getMonth() + increment);
            return newMonth;
        });
    };

    useEffect(() => {
        Clickoutside(Ref, Ref2, setModal)
        // eslint-disable-next-line
    }, []);

    return (
        <div ref={Ref} className='createAdvertisement'>
            <div ref={Ref2} className='createAdvertisement_inner'>
                <p className='createAdvertisement_topHead'>Create Advertisement</p>

                <div className='createAdvertisement_lableSec'>
                    <p >Advertisement Image</p>
                    <div className='createAdvertisement_uploader !cursor-pointer'>
                        {img && <i onClick={() => setImg("")} class="fa-solid fa-trash"></i>}
                        <img className={img ? "fullImg" : "uploadImg"} src={img ? img : uploadImg} alt="uploadImg" />
                        <input type="file" accept="image/*" ref={Ref} onChange={(e) => handleImg(e)} />
                    </div>
                    <div>
                        {!img && <p className="createAdvertisement_error">Image is required</p>}
                        <p style={{ fontSize: "12px", }}>Recommended Image type : <span style={{ fontWeight: "700" }}>JPG , JPEG , PNG</span></p>
                        <p style={{ fontSize: "12px" }}>Recomended resolution : <span style={{ fontWeight: "700" }}>1024 * 1024</span></p>
                        <p style={{ fontSize: "12px" }}>Image Size limit : <span style={{ fontWeight: "700" }}>10 MB</span></p>
                    </div>
                </div>

                <div className='createAdvertisement_calenderGrid'>
                    <div>
                        <label>From</label>
                        <CalenderAvailability
                            handleMonthChange={handleMonthChangeFrom}
                            currentMonth={fromMonth}
                            selectedDate={fromDate}
                            setSelectedDate={setFromDate}
                        />
                    </div>
                    <div>
                        <label>To</label>
                        <CalenderAvailability
                            handleMonthChange={handleMonthChangeTo}
                            currentMonth={toMonth}
                            selectedDate={toDate}
                            setSelectedDate={setToDate}
                        />
                    </div>

                </div>

                <div className='createAdvertisement_grid'>
                    <InputField
                        label='Advertisement Name'
                        placeholder='Advertisement Name'
                        name='name'
                        errors={errors?.name}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                    />


                    <InputField
                        label='Bid Amount'
                        placeholder='Bid Amount'
                        name='bitAmount'
                        errors={errors?.bitAmount}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                        min={today}
                        type="number"
                    />

                    <DropdownField
                        label='Select Slot Type'
                        placeholder='Select Slot Type'
                        name='slotType'
                        errors={errors?.slotType}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                        options={[{ label: "Adverisement Top Section", value: "Adverisement Top Section" }, { label: "Advertisement Middle Section", value: "Advertisement Middle Section" }, { label: "Both", value: "Both" }]}
                    />


                    <DropdownField
                        label='Select Product'
                        placeholder='Select Product'
                        name='product'
                        errors={errors?.product}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                        options={[{ label: "Cleaning", value: "Cleaning" }, { label: "Internet", value: "Internet" }]}
                    />
                </div>

                <div className='createAdvertisement_advertisementBtn'>
                    <button className='generateBtn' onClick={handleSubmit(handleCreate)}>Create</button>
                </div>

            </div>
        </div>
    )
}

export default CreateAdvertisementSlot