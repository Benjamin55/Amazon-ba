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
               title='Product 1'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={3}
                /> 
               <Product 
               id='1'
               title='Product 2'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={4}
                /> 
                <Product 
               id='2'
               title='Product 3'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={1}
                /> 
            </div>
            <div className="div home__row">
            <Product 
               id='3'
               title='Product 4'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={3}
                /> 
               <Product 
               id='4'
               title='Product 5'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={2}
                /> 
            </div>
            <div className="div home__row">
            <Product 
               id='5'
               title='Product 6'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={3}
                /> 
               <Product 
               id='6'
               title='Product 7'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={4}
                /> 
                <Product 
               id='7'
               title='Product 8'
               price={29.99}
               image="https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620"
               rating={1}
                /> 
            </div>
          </div>
        </div>
    )
}

export default Home
