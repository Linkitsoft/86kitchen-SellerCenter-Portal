import React, {useState} from 'react'

const OrdersTab = () => {
    const [index, setIndex] = useState(1)

    const colorClass = (id) => {
        if(id === index){
            return "selected"
        }
    }
  return (
    <div className="order">
        <div className="order_tab">
            <p onClick={() => setIndex(1)} className={colorClass(1)}>Ongoing</p>
            <p onClick={() => setIndex(2)} className={colorClass(2)}>Completed</p>
            <p onClick={() => setIndex(3)} className={colorClass(3)}>Cancelled</p>
        </div>
    </div>
  )
}

export default OrdersTab