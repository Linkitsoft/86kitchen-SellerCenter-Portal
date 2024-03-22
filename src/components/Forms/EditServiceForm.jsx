import React, { useState } from 'react'
import star from "../../assets/images/Admin-20 (20).png"
import backImg from "../../assets/images/Admin-20 (29).png"
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { toast } from 'react-toastify'
import { serviceValidation } from '../../validationSchema'

const EditServiceForm = () =>
{
    const [banner, setBanner] = useState(null);
    const navigate = useNavigate()

    const handleFileChange = (event, type) =>
    {
        const file = event.target.files[0];

        if (file)
        {
            const reader = new FileReader();
            reader.onloadend = () =>
            {
                const fileType = type;

                if (fileType === 'banner')
                {
                    setBanner({
                        file: file,
                        previewURL: reader.result,
                    });
                }

            };
            reader.readAsDataURL(file);
        } else
        {
            if (type === 'banner')
            {
                setBanner(null);
            }
        }
    };


    const initialValues = {
        name: '',
        category: '',
        price: '',
        item: '',
        description: '',
        commision: null,
    };

    const onSubmit = (values) =>
    {
        toast.success("Service updated successfully")
    };


    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={serviceValidation}>
            <Form>
                <div className="addServ_header">
                    <p className="addServ_title"><img src={backImg} alt='' onClick={() => navigate(-1)} />Edit Services</p>
                </div>
                <div className="addServ_service">
                    <div className="addServ_serviceMain">
                        <p className="addServ_subhead">Service Image</p>
                        <div>
                            <div className="addServ_uploadSec">
                                {!banner &&
                                    <label htmlFor="bannerInput">
                                        <img className="addServ_mini" src={star} alt='' />
                                    </label>}
                                <input type="file" id="bannerInput" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, 'banner')} />
                                {banner && <img className="addServ_file" src={banner?.previewURL} alt='' />}
                                {banner && <i className="fa-solid fa-trash" onClick={() => setBanner(null)}></i>}
                            </div>
                        </div>
                        <div className="addServ_form">
                            <div>
                                <p htmlFor="name">Service Name</p>
                                <Field placeholder='Service name' type="text" id="name" name="name" />
                                <ErrorMessage className="verify_err" name="name" component="div" />
                            </div>
                            <div>
                                <p htmlFor="category">Service Category</p>
                                <Field as="select" id="category" name="category">
                                    <option value="Fiber" selected hidden>Select Service Category</option>
                                    <option value="Fiber">Storm Fiber</option>
                                    <option value="Optical">Optical</option>
                                </Field>
                                <ErrorMessage className="verify_err" name="category" component="div" />
                            </div>
                            <div>
                                <p htmlFor="name">Total Price</p>
                                <Field type='number' placeholder='Enter total price' id="price" name="price" />
                                <ErrorMessage className="verify_err" name="price" component="div" />
                            </div>
                        </div>
                        <div className="addServ_form">
                            <div>
                                <p htmlFor="name">Choose Recommended Items</p>
                                <Field as='select' placeholder='Choose recommended items' id="item" name="item">
                                    <option value="Fiber" selected hidden>Select Recommended Items</option>
                                    <option value="Fiber">Item 1</option>
                                    <option value="Optical">Item 2</option>
                                </Field>
                                <ErrorMessage className="verify_err" name="item" component="div" />
                            </div>
                            <div>
                                <p htmlFor="description">Service Description</p>
                                <Field type='text' placeholder='Service description' id="description" name="description" />
                                <ErrorMessage className="verify_err" name="description" component="div" />
                            </div>
                            <div>
                                <p htmlFor="commision">Commision</p>
                                <Field type='number' placeholder='Enter Commision' id="commision" name="commision" />
                                <ErrorMessage className="verify_err" name="commision" component="div" />
                            </div>
                        </div>
                        <div className="addServ_submit">
                            <button type='submit'>Update</button>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

export default EditServiceForm
