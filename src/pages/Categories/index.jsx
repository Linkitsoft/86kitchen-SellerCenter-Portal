import React, {useState} from 'react'
import Sidebar from '../../components/Sidebar'
import CategoryTable from '../../components/Tables/CategoryTable'
import AddCategory from '../../components/Modals/AddCategory'
import EditCategory from '../../components/Modals/EditCategory'

const Categories = () =>
{
    const [modal, setModal] = useState('')
    return (
        <div>
            {modal === 'add' && <AddCategory setModal={setModal}/>}
            {modal === 'edit' && <EditCategory setModal={setModal}/>}
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"2a"} />
                    <div className="dashboard">
                        <div className="dashboard_header">
                            <p className='dashboard_title'>Service Categories</p>
                            <button className="dashboard_btn" onClick={() => setModal('add')}>+ Create Category</button>
                        </div>
                        <div className="dashboard_queries">
                            <CategoryTable setModal={setModal}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories