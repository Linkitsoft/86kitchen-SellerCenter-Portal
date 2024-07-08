import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupValidation } from "../../validationSchema";
import Recaptcha from "../../components/Recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PasswordInputField from "../InputField/PasswordField";
import InputField from "../InputField/InputField";
import { SignUp } from "../../Services/Partner";

const SignupForm = () =>
{
    const [captchaValue, setCaptchaValue] = useState(null);

    const navigate = useNavigate()
    const { control, handleSubmit, register, trigger, formState: { errors, isSubmitting } } = useForm
        ({
            defaultValues: {
                email: '',
                password: '',
                confirmPassword: ''
            },
            mode: 'onBlur',
            resolver: yupResolver(signupValidation)
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

    const onSubmit = async (value) =>
    {
        const res = await SignUp({ ...value, status: 0, isSuperAdmin: true })
        if (res?.data?.status === 'success')
        {
            // toast.success("Account request sent to admin")
            navigate("/login")
        }
    }
    return (
        <>
            <div className="login_inputWrapper">
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
            <div className="login_inputWrapper">
                <label htmlFor="password">Password</label>
                <PasswordInputField
                    label='Password'
                    placeholder='Password'
                    name='password'
                    errors={errors?.password}
                    control={control}
                    handleBlur={handleBlur}
                    register={register} />
            </div>
            <div className="login_inputWrapper">
                <label htmlFor="password">Confirm Password</label>
                <PasswordInputField
                    label='Confirm Password'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    errors={errors?.confirmPassword}
                    control={control}
                    handleBlur={handleBlur}
                    register={register} />
            </div>
            <div className="login_inputWrapper">
                <Recaptcha captchaValue={captchaValue} setCaptchaValue={setCaptchaValue} />
            </div>
            {captchaValue &&
                <div className="login_loginBtn">
                    <button disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>Sign Up</button>
                </div>}
            <p className="login_signup">Already have an account? <span onClick={() => navigate("/login")}>Sign In</span></p>
        </>
    )
}

export default SignupForm