
import { Link } from 'react-router-dom';
import React from 'react'

function Navbar() {
  return (
    <div>   
      <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
    </ul>
    </nav>
    </div>
  )
}

export default Navbar