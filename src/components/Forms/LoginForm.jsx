import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../../validationSchema";
// import Recaptcha from "../../components/Recaptcha";
import { useUser } from "../../context/userContext";
import PasswordInputField from "../InputField/PasswordField";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignIn } from "../../Services/Partner";
import { toast } from "react-toastify";

const LoginForm = () =>
{
    // const [captchaValue, setCaptchaValue] = useState(null);

    const navigate = useNavigate()
    const { setUser } = useUser()
    const [errMsg, setErrMsg] = useState(null);
    const { control, handleSubmit, register, trigger, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            type: '',
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
        const res = await SignIn(value)
        if (res?.data?.status === 'fail')
        {
            setErrMsg("Invalid credentials")
            return toast.error("Invalid credentials")
        }
        if (res?.data?.status === 'success'){
            if(value?.type === 0 || value?.type === '0'){
                setUser("admin")
                window.localStorage.setItem("token", res?.data?.data?.token)
                window.localStorage.setItem("userId", res?.data?.data?.id)
                window.location.reload()
            } else {
                setUser("user")
                window.localStorage.setItem("token", res?.data?.data?.token)
                window.localStorage.setItem("userId", res?.data?.data?.id)
                window.location.reload()
            }
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
                <div>
                    <label>Select Type</label>
                    <select
                        control={control}
                        {...register("type")}
                        onBlur={() => handleBlur("type")}
                        name={"type"}
                    >
                        <option selected hidden value={""}>Select Type</option>
                        <option value={0}>Super Admin</option>
                        <option value={1}>Observant User</option>
                    </select>
                    {errors.type ? <div className="verify_err">{errors?.type?.message}</div> : null}
                </div>
            </div>
            {/* <div className="login_inputWrapper">
                <Recaptcha captchaValue={captchaValue} setCaptchaValue={setCaptchaValue} />
            </div> */}
            {errMsg &&
                <div className="login_inputWrapper">
                    <div className="login_err">{errMsg}</div>
                </div>}
            {isSubmitting &&
                <div className="login_inputWrapper">
                    <div className="login_err"></div>
                </div>}

            <div className="login_loginBtn">
                <button disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>{isSubmitting ? "Please wait..." : "Sign In"}</button>
            </div>

            {/* {captchaValue &&
                <div className="login_loginBtn">
                    <button disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>{isSubmitting ? "Please wait..." : "Sign In"}</button>
                </div>} */}
            <p className="login_signup">Don’t have an account? <span onClick={() => navigate("/signup")}>Sign up</span></p>
        </>
    )
}

export default LoginForm