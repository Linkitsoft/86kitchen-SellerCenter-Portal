import React, { useState } from 'react'
import lockIcon from "../../assets/images/Admin-20 (21).png"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Sidebar from '../../components/Sidebar';

const ChangePassword = () =>
{
    const [eyeIcon, setEyeIcon] = useState(false);
    const [eyeIcon2, setEyeIcon2] = useState(false);

    const initialValues = {
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    const onSubmit = (values) =>
    {
        toast.success("Password updated succesfully")
    };

    return (
        <div className="mainLayout">
            <div className="mainLayout_parent">
                <Sidebar index={"7"} />
                <div className="dashboard">
                    <p className="dashboard_title">Change Password</p>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        <Form>
                            <div className='setPassword'>
                                <div className='setPassword_wrap'>
                                    <label className='setPassword_label' htmlFor="password">New Password</label>
                                    <div className='setPassword_inputSec'>
                                        <img src={lockIcon} alt="lockIcon" className='lockIcon' />
                                        <Field placeholder='password' type={eyeIcon === false ? "password" : "text"} id="password" name="password" />
                                        <ErrorMessage className="verify_err" name="password" component="div" />
                                        <i
                                            onClick={() => setEyeIcon(!eyeIcon)}
                                            className={
                                                eyeIcon === false
                                                    ? "fa-regular showEye fa-eye-slash"
                                                    : "fa-regular showEye fa-eye"
                                            }
                                        ></i>

                                    </div>

                                    <br />
                                    <label className='setPassword_label' htmlFor="confirmPassword">Confirm Password</label>

                                    <div className='setPassword_inputSec'>
                                        <img src={lockIcon} alt="lockIcon" className='lockIcon' />
                                        <Field placeholder='Confirm Password' type={eyeIcon2 === false ? "password" : "text"} id="confirmPassword" name="confirmPassword" />
                                        <ErrorMessage className="verify_err" name="confirmPassword" component="div" />
                                        <i
                                            onClick={() => setEyeIcon2(!eyeIcon2)}
                                            className={
                                                eyeIcon2 === false
                                                    ? "fa-regular showEye fa-eye-slash"
                                                    : "fa-regular showEye fa-eye"
                                            }
                                        ></i>
                                    </div>
                                    <div className='setPassword_update'>
                                        <button type='submit'>Update</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>

                </div>
            </div>
        </div>
    )
}

export default ChangePassword