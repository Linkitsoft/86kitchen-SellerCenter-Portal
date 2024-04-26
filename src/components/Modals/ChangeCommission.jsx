import React, { useEffect, useRef } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside';
import { useForm } from 'react-hook-form';
import InputField from '../InputField/InputField';
import { editCommissionValidation } from '../../validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const ChangeCommission = ({ setModal }) =>
{
    const Ref = useRef();
    const Ref2 = useRef();

    const { control, handleSubmit, register, trigger, formState: { errors } } = useForm({
        defaultValues: {
            commission: null
        },
        mode: 'onBlur',
        resolver: yupResolver(editCommissionValidation)
    })

    useEffect(() =>
    {
        Clickoutside(Ref, Ref2, setModal)
        // eslint-disable-next-line
    }, []);


    const onSubmit = () =>
    {
        setModal('')
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
        <div ref={Ref} className='addCat'>
            <div ref={Ref2} className='addCat_inner'>
                <p className='addCat_topHead'>Change Commission</p>
                <div className='addCat_inputWrap'>
                    <InputField
                        label='Commission'
                        errors={errors?.commission}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                        placeholder="Commission"
                        type="number"
                        name="commission"
                    />
                </div>
                <p className='addCat_err'>Please note that any changes to commission rates will require approval from the administrator before updating in the system.</p>
                <button  onClick={handleSubmit(onSubmit)} className='addCat_btn'>Submit</button>
            </div>
        </div>
    )
}

export default ChangeCommission