import React from 'react'
import InputField from '../InputField/InputField'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observantUsersValidation } from '../../validationSchema';
import { toast } from 'react-toastify';
import PasswordInputField from '../InputField/PasswordField';

const AddObservantUserForm = () =>
{
    const { control, handleSubmit, register, trigger, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phoneNo: '',
            password: '',
            confirmPassword: '',
        },
        mode: 'onBlur',
        resolver: yupResolver(observantUsersValidation)
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
        <>
            <div className="createUser_left">
                <div className="createUser_form">
                    <InputField
                        label='Name'
                        placeholder='name'
                        name='name'
                        errors={errors?.name}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                    />
                    <InputField
                        label='Email'
                        placeholder='Enter Email'
                        name='email'
                        errors={errors?.email}
                        control={control}
                        handleBlur={handleBlur}
                        isLabel
                        register={register} />
                </div>
                <div className="createUser_form">
                    <div>
                        <p>Password</p>
                        <PasswordInputField
                            label='Password'
                            placeholder='Enter Password'
                            name='password'
                            errors={errors?.password}
                            control={control}
                            handleBlur={handleBlur}
                            hide
                            register={register} />
                    </div>
                    <div>
                        <p>Confirm Password</p>
                        <PasswordInputField
                            label='Confirm Password'
                            placeholder='Enter Confirm Password'
                            name='confirmPassword'
                            errors={errors?.confirmPassword}
                            control={control}
                            handleBlur={handleBlur}
                            hide
                            register={register} />
                    </div>
                </div>
                <div className="createUser_form">
                    <InputField
                        label='Phone No'
                        placeholder='Phone No'
                        name='phoneNo'
                        errors={errors?.phoneNo}
                        control={control}
                        handleBlur={handleBlur}
                        isLabel
                        register={register} />
                </div>
            </div>
            <div className="createUser_submit">
                <button onClick={handleSubmit(onSubmit)}>Create</button>
            </div>
        </>
    )
}

export default AddObservantUserForm