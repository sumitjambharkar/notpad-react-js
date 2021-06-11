import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar bg-primary container">
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/notes'>Notes</Link>
            <Link className="link" to='/create'>CreateNote</Link>
        
        </div>
    )
}

export default Navbar