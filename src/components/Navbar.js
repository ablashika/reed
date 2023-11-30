import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <h1>Reed</h1>
     <div className='nav'>
      <h1> <Link to="/">Home</Link></h1>
      <h1> <Link to="/library">Library</Link></h1>
      <h1> <Link to="/upload">Upload</Link></h1>
     </div>
    </div>
  )
}
