import React, {useEffect, useState} from "react";
import {
    getAllOrders,
    updateOrderStatus,
    deleteOrder
} from "../services/orderService";

import "../css/Orders.css";


function Orders(){

    const [orders,setOrders] = useState([]);


    useEffect(()=>{
        loadOrders();
    },[]);


    const loadOrders = async()=>{

        try{

            const data = await getAllOrders();
            setOrders(data);

        }catch(error){
            console.log(error);
        }

    };


    const changeStatus = async(id,status)=>{

        try{

            await updateOrderStatus(id,status);
            loadOrders();

        }catch(error){
            console.log(error);
        }

    };


    const removeOrder = async(id)=>{

        if(window.confirm("Delete this order?")){

            await deleteOrder(id);
            loadOrders();

        }

    };


// return(

// <div className="orders-container">

// <h2>Order Management</h2>


// <table>

// <thead>

// <tr>
// <th>ID</th>
// <th>Name</th>
// <th>Email</th>
// <th>Address</th>
// <th>Amount</th>
// <th>Status</th>
// <th>Action</th>
// </tr>

// </thead>


// <tbody>

// {
// orders.map(order=>(

// <tr key={order.id}>

// <td>{order.id}</td>

// <td>{order.customerName}</td>

// <td>{order.customerEmail}</td>

// <td>{order.address}</td>

// <td>₹ {order.totalAmount}</td>


// <td>

// <select

// value={order.status}

// onChange={(e)=>
// changeStatus(
// order.id,
// e.target.value
// )
// }

// >

// <option>Pending</option>
// <option>Confirmed</option>
// <option>Preparing</option>
// <option>Delivered</option>
// <option>Cancelled</option>

// </select>


// </td>


// <td>

// <button
// className="delete-btn"
// onClick={()=>removeOrder(order.id)}
// >
// Delete
// </button>

// </td>


// </tr>


// ))

// }


// </tbody>


// </table>


// </div>

// )
return (
    <div className="order-container">

        <h2>Order Management</h2>

        <div className="order-table-wrapper">

            <table className="order-table">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>


                <tbody>

                    {orders.length === 0 ? (

                        <tr>
                            <td colSpan="7" className="no-order">
                                No Orders Found
                            </td>
                        </tr>

                    ) : (

                        orders.map((order) => (

                            <tr key={order.id}>

                                <td>{order.id}</td>

                                <td>
                                    {order.customerName}
                                </td>

                                <td>
                                    {order.customerEmail}
                                </td>

                                <td>
                                    {order.address}
                                </td>

                                <td>
                                    ₹ {order.totalAmount}
                                </td>


                                <td>

                                   <select
  value={order.status}
  onChange={(e) =>
    changeStatus(
      order.id,
      e.target.value
    )
  }
>

                                        <option value="Pending">
                                            Pending
                                        </option>

                                        <option value="Preparing">
                                            Preparing
                                        </option>

                                        <option value="Out For Delivery">
                                            Out For Delivery
                                        </option>

                                        <option value="Delivered">
                                            Delivered
                                        </option>

                                        <option value="Cancelled">
                                            Cancelled
                                        </option>

                                    </select>

                                </td>


                                <td>

                                    <button
  className="delete-btn"
  onClick={() =>
    removeOrder(order.id)
  }
>
  Delete
</button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>

    </div>
);

}


export default Orders;