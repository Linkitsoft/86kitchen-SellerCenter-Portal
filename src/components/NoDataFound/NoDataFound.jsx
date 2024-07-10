import React from 'react'

const NoDataFound = ({ msg }) => {
    return (
        <div className='noDataFound'>
            <p>{msg || "No Data Found"}</p>
        </div>
    )
}

export default NoDataFound