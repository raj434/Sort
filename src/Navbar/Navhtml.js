import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navhtml () {
    return (
        <>
            <ul className='nav-ul'>
                
                <Link to='/' className='nav-Link'>Home</Link> 
                <Link to='/Bst' className='nav-Link'>Bobble-Sort</Link>
                <Link to='#'className='nav-Link'>home1</Link>
                <Link to='#'className='nav-Link'>home2</Link>
                <Link to='#'className='nav-Link'>home3</Link>
                <Link to='#'className='nav-Link'>home4</Link>          
           </ul>
         
        </>
    );
}

export default Navhtml;