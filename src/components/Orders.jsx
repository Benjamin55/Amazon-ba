import React, { useState, useEffect } from 'react';
import './orders.css';

// import { db } from '../firebase';

// import { useStateValue } from '../StateProvider';
// import Order from './Order';


function Orders() {
    // const [{ basket, user}, dispatch] = useStateValue();
    // const [orders, setOrders] = useState([]);
    
    
   

    // useEffect(() => {
    //     if(user) {
    //         db
    //         .collection('users')
    //         .doc(user?.uid)
    //         .collection('order')
    //         .orderBy('created', 'desc')
    //         .onSnapshot(snapshot => (
    //             setOrders(snapshot.docs.map(doc => ({
    //                 id: doc.id,
    //                 data: doc.data()
    //             })))
    //         ))
    //     }else {
    //         setOrders([])
    //     }

      
    // }, [user])



    return (
        <div className='ordersss'>
            <h1>your orders</h1>

            </div>

    )
}

export default Orders
