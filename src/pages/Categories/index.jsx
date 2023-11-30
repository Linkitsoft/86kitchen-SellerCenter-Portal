import React from 'react'
import Sidebar from '../../components/Sidebar'
import CategoryTable from '../../components/Tables/CategoryTable'

const Categories = () =>
{
    return (
        <div>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"2a"} />
                    <div className="dashboard">
                        <div className="dashboard_header">
                            <p className='dashboard_title'>Service Categories</p>
                            <button>+ Create Category</button>
                        </div>
                        <div className="dashboard_queries">
                            <CategoryTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories