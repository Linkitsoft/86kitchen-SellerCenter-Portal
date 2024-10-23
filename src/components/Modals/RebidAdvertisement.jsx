import React, { useEffect, useRef, useState } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside';
import { toast } from 'react-toastify';
import InputField from '../InputField/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { advertisementValidation, rebidValidation } from '../../validationSchema';
import { useDateSelector } from '../../hooks/useDateSelector';


const RebidAdvertisement = ({ setModal }) => {
    const Ref = useRef()
    const Ref2 = useRef();
    const today = new Date().toISOString().split('T')[0];
    
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
        resolver: yupResolver(rebidValidation),
    });
   
    const handleCreate = (value) => {
        toast.success("Rebid Request Sent Succesfully")
        setModal("")
    }

    const handleBlur = async (fieldName) => {
        try {
            await trigger(fieldName);
        } catch (error) {
            console.error(error);
        }
    };

 
 

    useEffect(() => {
        Clickoutside(Ref, Ref2, setModal)
        // eslint-disable-next-line
    }, []);

    return (
        <div ref={Ref} className='rebidAdvertisement'>
            <div ref={Ref2} className='rebidAdvertisement_inner'>
                <p className='font-semibold text-xl self-center text-[#262A69] my-2.5'>Rebid Advertisement</p>

                <div style={{ margin: "20px 0" }}>
                    <label className='text-black font-semibold mb-2'>Start Date</label>
                    <InputField
                        labelClass={'text-black font-semibold mb-2'}
                        placeholder='Start Date'
                        name='startDate'
                        errors={errors?.startDate}
                        control={control}
                        handleBlur={handleDateChange}
                        register={register}
                        min={today}
                        type="date"
                        className='!border-[1px] border-black pl-3 !flex !pr-0  items-center p-2 !rounded-md !w-full outline-none'
                    />
                </div>
                <div className='flex flex-col w-full mb-4'>
                    <label className='text-black font-semibold mb-2'>End Date</label>
                    <InputField
                        labelClass={'text-black font-semibold mb-2'}
                        placeholder='End Date'
                        name='endDate'
                        errors={errors?.endDate}
                        control={control}
                        handleBlur={handleDateChange}
                        register={register}
                        min={today}
                        type="date"
                        className='!border-[1px] border-black pl-3 !flex !pr-0  items-center p-2 !rounded-md !w-full outline-none'
                    />

                </div>

                <div className='rebidAdvertisement_grid'>

                    <label className='text-black font-semibold mb-2'>Bid Amount</label>
                    <InputField
                        labelClass={'text-black font-semibold mb-2'}
                        placeholder='Bid Amount'
                        name='bitAmount'
                        errors={errors?.bitAmount}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                        min={today}
                        type="number"
                        className='!border-[1px] border-black pl-3 !flex !pr-0  items-center p-2 !rounded-md !w-full outline-none'
                    />
                </div>
                <div className='flex gap-1'>
                    <div className='rebidAdvertisement_advertisementBtn'>
                        <button className='generateBtn' onClick={handleSubmit(handleCreate)}>Rebid</button>
                    </div>
                    <div className='rebidAdvertisement_CancelBtn'>
                        <button className='generateBtn' onClick={() => setModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RebidAdvertisement