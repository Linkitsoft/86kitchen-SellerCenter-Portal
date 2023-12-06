import React, { useEffect, useRef } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside';
import { toast } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { categoryValidation } from '../../validationSchema';

const AddCategory = ({ setModal }) =>
{
    const Ref = useRef();
    const Ref2 = useRef();


    const initialValues = {
        name: '',
    };

    const onSubmit = (values) =>
    {
        toast.success("Category created succesfully")
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
                <p className='addCat_topHead'>Create Category</p>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={categoryValidation}>
                    <Form>
                        <div className='addCat_inputWrap'>
                            <label htmlFor="name">Category Name</label>
                            <Field placeholder="Category Name" type="text" id="name" name="name" />
                            <ErrorMessage className="verify_err" name="name" component="div" />
                        </div>

                        <button type='submit' className='addCat_btn'>Create</button>
                    </Form>
                </Formik>

            </div>
        </div>
    )
}

export default AddCategory