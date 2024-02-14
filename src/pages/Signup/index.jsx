import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/Admin-20 (75).png";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { signupValidation } from "../../validationSchema";
import Recaptcha from "../../components/Recaptcha";

const Signup = () =>
{

    const [eyeIcon, setEyeIcon] = useState(false);
    const [eyeIcon2, setEyeIcon2] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);

    const navigate = useNavigate()

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: ''
    };
    const onSubmit = (values) =>
    {
        navigate("/login")
    };

    return (
        <div className="login">
            <div className="login_box">
                <div className="login_topHead">
                    <img src={logoImg} alt="logo" onClick={() => navigate('/home')} />
                    <p className="head">Partner Center</p>
                </div>
                <div className="login_inputSection">
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signupValidation}>
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
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field type={eyeIcon2 === false ? "password" : "text"} id="confirmPassword" name="confirmPassword" />
                                <i
                                    onClick={() => setEyeIcon2(!eyeIcon2)}
                                    className={
                                        eyeIcon2 === false
                                            ? "fa-regular showEye fa-eye-slash"
                                            : "fa-regular showEye fa-eye"
                                    }
                                ></i>
                                <ErrorMessage className="login_err" name="confirmPassword" component="div" />
                            </div>
                            <div className="login_inputWrapper">
                                <Recaptcha captchaValue={captchaValue} setCaptchaValue={setCaptchaValue} />
                            </div>
                            {captchaValue &&
                                <div className="login_loginBtn">
                                    <button type="submit">Sign Up</button>
                                </div>}
                            <p className="login_signup">Already have an account? <span onClick={() => navigate("/login")}>Sign In</span></p>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};
export default Signup;