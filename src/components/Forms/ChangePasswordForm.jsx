import React from 'react'
import lockIcon from "../../assets/images/Admin-20 (21).png"
import { toast } from 'react-toastify';
import { passwordValidation } from '../../validationSchema';
import PasswordInputField from '../InputField/PasswordField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const ChangePasswordForm = () =>
{
    const { control, handleSubmit, register, trigger, formState: { errors } } = useForm({
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
        mode: 'onBlur',
        resolver: yupResolver(passwordValidation)
    })

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

    const onSubmit = (values) =>
    {
        toast.success("Password updated succesfully")
    };
    return (
        <div className='setPassword'>
            <div className='setPassword_wrap'>
                <label className='setPassword_label' htmlFor="password">New Password</label>
                <div className='setPassword_inputSec'>
                    <img src={lockIcon} alt="lockIcon" className='lockIcon' />
                    <PasswordInputField
                        label='New Password'
                        placeholder='Enter New Password'
                        name='password'
                        errors={errors?.password}
                        control={control}
                        handleBlur={handleBlur}
                        register={register} />
                </div>
                <br />
                <label className='setPassword_label' htmlFor="confirmPassword">Confirm Password</label>

                <div className='setPassword_inputSec'>
                    <img src={lockIcon} alt="lockIcon" className='lockIcon' />
                    <PasswordInputField
                        label='Confirm Password'
                        placeholder='Enter Confirm Password'
                        name='confirmPassword'
                        errors={errors?.confirmPassword}
                        control={control}
                        handleBlur={handleBlur}
                        register={register} />
                </div>
                <div className='setPassword_update'>
                    <button onClick={handleSubmit(onSubmit)}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordForm