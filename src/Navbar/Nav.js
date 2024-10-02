import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Bst from '../components/Bsort';
import Home from '../Home/Home';
function Navbar() {
    return (
        <>
      
            <Router>
                <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Bst' element={<Bst/>} />
                <Route path='/home' element={<Bst/>}/>
                </Routes>
            </Router>

        </>
  );
}
export default Navbar;