import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { loginValidation } from "../../validationSchema";
import Recaptcha from "../../components/Recaptcha";
import { useUser } from "../../context/userContext";

const LoginForm = () =>
{
    const [eyeIcon, setEyeIcon] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);

    const navigate = useNavigate()
    const { setUser } = useUser()

    const initialValues = {
        email: '',
        password: '',
    };

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

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginValidation}>
            <Form>
                <div className="login_inputWrapper">
                    <label htmlFor="email">Email:</label>
                    <Field type="text" id="email" name="email" />
                    <ErrorMessage className="login_err" name="email" component="div" />
                </div>
                <div className="login_inputWrapper">
                    <label htmlFor="password">Password</label>
                    <Field type={eyeIcon === false ? "password" : "text"} id="password" name="password" />
                    <i
                        onClick={() => setEyeIcon(!eyeIcon)}
                        className={
                            eyeIcon === false
                                ? "fa-regular showEye fa-eye-slash"
                                : "fa-regular showEye fa-eye"
                        }
                    ></i>
                    <ErrorMessage className="login_err" name="password" component="div" />
                </div>
                <div className="login_inputWrapper">
                    <Recaptcha captchaValue={captchaValue} setCaptchaValue={setCaptchaValue} />
                </div>
                {captchaValue &&
                    <div className="login_loginBtn">
                        <button type="submit">Sign In</button>
                    </div>}
                <p className="login_signup">Don’t have an account? <span onClick={() => navigate("/signup")}>Sign up</span></p>
            </Form>
        </Formik>
    )
}

export default LoginForm