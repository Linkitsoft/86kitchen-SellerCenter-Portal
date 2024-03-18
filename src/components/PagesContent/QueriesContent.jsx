import React, { useState } from 'react'
import QueriesTable from '../../components/Tables/QueriesTable'

const QueriesContent = () =>
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
    )
}

export default QueriesContent