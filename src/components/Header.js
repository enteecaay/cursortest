import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [userRole, setUserRole] = useState('guest'); // This should be managed by your authentication system

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          {userRole === 'guest' && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
          {userRole === 'member' && (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </>
          )}
          {userRole === 'shop' && (
            <>
              <li><Link to="/shop-dashboard">Shop Dashboard</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </>
          )}
          {userRole === 'admin' && (
            <>
              <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;