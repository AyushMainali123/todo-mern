import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="navbar__brand">
                    LOGO
                </div>
            </div>
            <div className="navbar__right">
                <div className="navbar__menu">
                    <Link to="/" >
                        Home
                    </Link>
                    <Link to="/create-todo">
                        Create Todo
                    </Link>
                    <Link to="/create-user">
                        Create User
                    </Link>
                    <Link to="/delete-user">
                        Delete User
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
