import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
           
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/test">Test</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/feedback">Feedback</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/register">Signin</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/login">Signin</NavLink>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
