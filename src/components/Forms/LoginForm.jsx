import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../../validationSchema";
import Recaptcha from "../../components/Recaptcha";
import { useUser } from "../../context/userContext";
import PasswordInputField from "../InputField/PasswordField";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignIn } from "../../Services/Partner";

const LoginForm = () =>
{
    const [captchaValue, setCaptchaValue] = useState(null);

    const navigate = useNavigate()
    const { setUser } = useUser()
    const [errMsg, setErrMsg] = useState(null);
    const { control, handleSubmit, register, trigger, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
        resolver: yupResolver(loginValidation)
    })

    // const onSubmit = (values) =>
    // {
    //     if (values.email === 'superadmin@gmail.com')
    //     {
    //         setUser("admin")
    //     } else
    //     {
    //         setUser("user")
    //     }
    //     navigate("/verification", { state: { fromLogin: true } })
    // };
    const onSubmit = async (value) =>
    {
        setErrMsg(null)
        const res = await SignIn({ ...value, type: parseInt(value?.type) })
        if (res?.data?.status === 'fail')
        {
            setErrMsg("Invalid credentials")
            return toast.error("Invalid credentials")
        }
        if (res?.data?.data?.type === 1)
        {
            setUser("admin")
            window.localStorage.setItem("token", res?.data?.data?.token)
            window.location.reload()
        } else 
        {
            setUser("user")
            window.localStorage.setItem("token", res?.data?.data?.token)
            window.location.reload()
        }

        // // navigate("/verification", { state: { loginSucc: true } })
        // window.localStorage.setItem("token", true)
        // window.location.reload()
    }

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
            {errMsg &&
                <div className="login_inputWrapper">
                    <div className="login_err">{errMsg}</div>
                </div>}
            {captchaValue &&
                <div className="login_loginBtn">
                    <button onClick={handleSubmit(onSubmit)}>Sign In</button>
                </div>}
            <p className="login_signup">Don’t have an account? <span onClick={() => navigate("/signup")}>Sign up</span></p>
        </>
    )
}

export default LoginForm