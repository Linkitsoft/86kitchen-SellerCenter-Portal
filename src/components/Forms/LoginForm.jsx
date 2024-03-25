import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../../validationSchema";
import Recaptcha from "../../components/Recaptcha";
import { useUser } from "../../context/userContext";
import PasswordInputField from "../InputField/PasswordField";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginForm = () =>
{
    const [captchaValue, setCaptchaValue] = useState(null);

    const navigate = useNavigate()
    const { setUser } = useUser()
    const { control, handleSubmit, register, trigger, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
        resolver: yupResolver(loginValidation)
    })

    const onSubmit = (values) =>
    {
        if (values.email === 'superadmin@gmail.com')
        {
            setUser("admin")
        } else
        {
            setUser("user")
        }
        navigate("/verification", { state: { fromLogin: true } })
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
                <Recaptcha captchaValue={captchaValue} setCaptchaValue={setCaptchaValue} />
            </div>
            {captchaValue &&
                <div className="login_loginBtn">
                    <button onClick={handleSubmit(onSubmit)}>Sign In</button>
                </div>}
            <p className="login_signup">Don’t have an account? <span onClick={() => navigate("/signup")}>Sign up</span></p>
        </>
    )
}

export default LoginForm