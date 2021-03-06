import React from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useHistory , Link} from 'react-router-dom';


function Subtotal() {
    const history = useHistory();

    const [{user,basket}, ] = useStateValue();


    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                    Total ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' />This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            {user ? <button onClick={e => history.push('/payment')}>Proceed to Checkout</button> : <Link to='/login'><button>Sign In to proceed to the Checkout</button></Link>  }
        </div>
    )
}

export default Subtotal
