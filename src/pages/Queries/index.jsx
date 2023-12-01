import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import QueriesTable from '../../components/Tables/QueriesTable'

const Queries = () =>
{
    const [index, setIndex] = useState(1)

    const colorClass = (id) =>
    {
        if (id === index)
        {
            return "selected"
        }
    }
    return (
        <div>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"5"} />
                    <div className="dashboard">
                        <div className="dashboard_header">
                            <p className='dashboard_title'>Queries</p>
                            <div className='dashboard_tabs'>
                                <button onClick={() => setIndex(1)} className={colorClass(1)}>All 9</button>
                                <button onClick={() => setIndex(2)} className={colorClass(2)}>Today's 5</button>
                            </div>
                        </div>
                        <div className="dashboard_queries">
                            <QueriesTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Queries