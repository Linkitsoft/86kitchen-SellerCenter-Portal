import React, { useEffect, useState } from 'react'
import QueriesTable from '../../components/Tables/QueriesTable'
import { GetAllQuery } from '../../Services/Partner'
import Spinner from '../Loader/Spinner'

const QueriesContent = () =>
{
    const [index, setIndex] = useState(1)
    const [queryData, setQueryData] = useState([])
    const [loader, setLoader] = useState(false)

    const colorClass = (id) =>
    {
        if (id === index)
        {
            return "selected"
        }
    }


    const getQueries = async () =>
    {
        try
        {
            setLoader(true)
            const res = await GetAllQuery()
            setQueryData(res?.data?.data)
        } catch (error)
        {
            setLoader(false)

        } finally
        {
            setLoader(false)

        }
    }

    useEffect(() =>
    {
        getQueries()
    }, [])
    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <p className='dashboard_title'>Queries</p>
                <div className='dashboard_tabs'>
                    <button onClick={() => setIndex(1)} className={colorClass(1)}>All 9</button>
                    <button onClick={() => setIndex(2)} className={colorClass(2)}>Today's 5</button>
                </div>
            </div>
            {loader ? <Spinner /> :
            <div className="dashboard_queries">
                <QueriesTable queryData={queryData}/>
            </div>}
        </div>
    )
}

export default QueriesContent