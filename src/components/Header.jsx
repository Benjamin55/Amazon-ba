import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <img className='header__logo' src='https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png' ></img>
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type='text'></input>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Return</span>
                    <span className='header__optionLineTwo'>Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
               <Link to='/checkout'>
               <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>
               </Link>
            </div>
        </div>
    )
}

export default Header