import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import {useStateValue} from '../StateProvider';
import { auth } from '../firebase';

function Header() {
const [ {basket, user}, dispatch ] = useStateValue();

const handleAuthentication = () => {
    if(user) {
        auth.signOut();
    }
}


    return (
        <div className='header' style={{textDecoration: 'none'}}>
            <Link to='/' style={{textDecoration: 'none'}}>
                <h3 className='header__name'>Webshop</h3>
            {/* <img className='header__logo' src='https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png' alt='' ></img> */}
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type='text'></input>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'} style={{textDecoration: 'none'}}>
                <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                    <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                <Link to='/orders' style={{textDecoration: 'none'}}>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Return</span>
                    <span className='header__optionLineTwo'>Orders</span>
                </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
               <Link to='/checkout' style={{textDecoration: 'none'}}>
               <div className='header__optionBasket' >
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount' style={{textDecoration: 'none'}}>{basket?.length}</span>
                </div>
               </Link>
            </div>
        </div>
    )
}

export default Header
