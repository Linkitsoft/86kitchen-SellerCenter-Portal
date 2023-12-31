import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/Admin-20 (75).png";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { loginValidation } from "../../validationSchema";

const Login = () =>
{

    const [eyeIcon, setEyeIcon] = useState(false);
    const navigate = useNavigate()

    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = (values) =>
    {
        navigate("/verification", { state: { fromLogin: true } })
    };

    return (
        <div className="login">
            <div className="login_box">
                <div className="login_topHead">
                    <img src={logoImg} alt="logo" onClick={() => navigate('/home')} />
                    <p className="head">Seller Center</p>
                </div>
                <div className="login_inputSection">
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
                            <div className="login_loginBtn">
                                <button type="submit">Sign In</button>
                            </div>
                                <p className="login_signup">Don’t have an account? <span onClick={() => navigate("/signup")}>Sign up</span></p>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};
export default Login;