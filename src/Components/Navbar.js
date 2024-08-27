import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure you have this CSS file imported

function Navbar() {
  return (
    <div className='navbar1'>
      <header>
        <div className="logo">Menu Master</div>
        <nav>
          <ul>
            <li><Link to="/Restaurants">Home</Link></li>
            <li><Link to="/userOrders">My Orders</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
