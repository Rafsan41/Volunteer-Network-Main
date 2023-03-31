import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import './Header.css'
const Header = () => {

    const image = logo;
    return (
        <div className='header-container' >
            <div className='logo'>
                <img src={image} alt="" />
            </div>
            <div>
                <Link className='link ' to='/home'>Home</Link>
                <Link className='link ' to='/donation'>Donation</Link>
                <Link className='link' to='/event'>Event</Link>
                <Link className='link' to='/blog'>Blog</Link>
                <Link className='' to='/register'>
                    <button className='registerbtn'>Register</button>
                </Link>
                <Link className='' to='/admin'>
                    <button className='adminbtn'>Admin</button>
                </Link>
            </div>

        </div>
    );
};

export default Header;