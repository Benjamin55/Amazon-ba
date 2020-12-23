import React from 'react';
import './home.css';
import Product from './Product'

function Home() {
    return (
        <div className='home'>
          <div className='home__container'>
              {/* <img className='home__image' src='https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt=''></img> */}
         
            <div className="div home__row">
               <Product 
               id='0'
               title='the lean startup'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={3}
                /> 
               <Product 
               id='1'
               title='the lean startup'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={4}
                /> 
                <Product 
               id='2'
               title='the lean startup, macbok notebook new arerotoe'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={1}
                /> 
            </div>
            <div className="div home__row">
            <Product 
               id='3'
               title='the lean startup'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={3}
                /> 
               <Product 
               id='4'
               title='the lean startup'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={2}
                /> 
            </div>
            <div className="div home__row">
               <Product /> 
               <Product /> 
               <Product /> 
            </div>
          </div>
        </div>
    )
}

export default Home
