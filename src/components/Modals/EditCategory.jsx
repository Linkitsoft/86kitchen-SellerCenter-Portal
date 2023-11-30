import React, { useEffect, useRef } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside';
import { toast } from 'react-toastify';

const EditCategory = ({ setModal }) => {
    const Ref = useRef();
    const Ref2 = useRef();

    const handleAdd = () => {
        toast.success("Hospital Created succesfully")
        setModal("")
    }


    useEffect(() => {
        Clickoutside(Ref, Ref2, setModal)
        // eslint-disable-next-line
    }, []);

    return (
        <div ref={Ref} className='addCat'>
            <div ref={Ref2} className='addCat_inner'>
                <p className='addCat_topHead'>Edit Category</p>

                <div className='addCat_inputWrap'>
                    <label>Category Name</label>
                    <input type="text" placeholder='Enter name' />
                </div>

                <button onClick={handleAdd} className='addCat_btn'>Edit</button>
            </div>
        </div>
    )
}

export default EditCategory