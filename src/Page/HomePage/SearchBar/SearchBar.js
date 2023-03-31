import React from 'react';
import './SearchBar.css'
const SearchBar = () => {
    return (
        <div>
            <h1>I Grow By Helping People In Need</h1>
            <input className='input' type="search" placeholder='Search...' />
            <button className='search'>Search</button>
        </div>
    );
};

export default SearchBar;