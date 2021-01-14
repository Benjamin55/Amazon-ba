import React from 'react'
import { useStateValue } from '../StateProvider'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <div>
                    <h3 className='checkout__title'>Hello {user?.email}  </h3>
                    <h2 className='checkout__title'>Your shopping Basket</h2>

                {basket.map(item => (
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
               
               
               
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
