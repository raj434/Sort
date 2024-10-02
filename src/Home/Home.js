import React from 'react'
import { Link } from 'react-router-dom';
import Navhtml from '../Navbar/Navhtml';
import './home.css';
import Footer from '../footer/footer';
const Home = () => {
  return (
      <div>
          <Navhtml/>
         <div className='Hero'>
        <div className='Hero-content'>
          <h1>Sorting Algorithms</h1>
          <p>
            Sorting is a Process in which items are Arrenged systematically
          </p>
          <button><Link to='Bst'>Next</Link></button>
          <h6>click the button to see sorting visulization</h6>
        </div>  
      </div>
      <Footer/>
    </div>
  )
}

export default Home;