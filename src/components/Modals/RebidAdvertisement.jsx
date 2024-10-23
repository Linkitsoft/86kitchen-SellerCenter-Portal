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
import Ad from '../../assets/images/Ad.png'

const RebidAdvertisement = ({ setModal }) => {
    const [img, setImg] = useState(Ad)
    const Ref = useRef()
    const Ref2 = useRef();
    const today = new Date().toISOString().split('T')[0];
    const [fromMonth, setFromMonth] = useState(new Date())
    const [toMonth, setToMonth] = useState(new Date())
    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()
    const { handleDateChange, selectedRange } = useDateSelector()



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
        <div ref={Ref} className='rebidAdvertisement'>
            <div ref={Ref2} className='rebidAdvertisement_inner'>
                <p className='rebidAdvertisement_topHead'>Rebid Advertisement</p>

                <div style={{ margin: "20px 0" }}>
                    <label>Start Date</label>
                    <CustomDatePicker value={selectedRange} handleChange={handleDateChange} />
                </div>
                <div >
                    <label>End Date</label>
                    <CustomDatePicker value={selectedRange} handleChange={handleDateChange} />
                </div>

                <div className='rebidAdvertisement_grid'>
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
                </div>
                <div className='flex gap-2 bg-red-600'>
                    <div className='rebidAdvertisement_advertisementBtn'>
                        <button className='generateBtn' onClick={handleSubmit(handleCreate)}>Rebid</button>
                    </div>
                    <div className='rebidAdvertisement_advertisementBtn'>
                        <button className='generateBtn' onClick={handleSubmit(handleCreate)}>Rebid</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RebidAdvertisement