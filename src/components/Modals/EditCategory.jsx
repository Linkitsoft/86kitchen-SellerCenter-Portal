import React, { useEffect, useRef } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside';
import { toast } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EditCategory = ({ setModal }) =>
{
    const Ref = useRef();
    const Ref2 = useRef();


    const initialValues = {
        name: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Category Name is required'),
    });


    const onSubmit = (values) =>
    {
        toast.success("Category updated succesfully")
        setModal("")
    };

    useEffect(() =>
    {
        Clickoutside(Ref, Ref2, setModal)
        // eslint-disable-next-line
    }, []);

    return (
        <div ref={Ref} className='addCat'>
            <div ref={Ref2} className='addCat_inner'>
                <p className='addCat_topHead'>Edit Category</p>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <div className='addCat_inputWrap'>
                            <label htmlFor="name">Category Name</label>
                            <Field placeholder="Category Name" type="text" id="name" name="name" />
                            <ErrorMessage className="verify_err" name="name" component="div" />
                        </div>

                        <button type='submit' className='addCat_btn'>Update</button>
                    </Form>
                </Formik>

            </div>
        </div>
    )
}

export default EditCategory