import React from 'react';
//import { useContext } from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    return (

        <nav className="navbar bg-light">
            <div className="container-fluid">
                <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link"
                    to="/">
                        BadBank
                        <span className="tooltiptext"> Home Page </span>
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-link ms-auto"  
                    to="/CreateAccount/">
                        Create Account
                        <span className="tooltiptext">Create an account with our bank. </span>
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-link"  
                    to="/deposit/">
                        Deposit
                        <span className="tooltiptext">Deposit cash from your account. </span>
                </NavLink>        
                <NavLink 
                    activeClassName="active"
                    className="nav-link"  
                    to="/withdraw/">
                        Withdraw
                        <span className="tooltiptext">Withdraw cash from your account. </span>
                </NavLink>     
                <NavLink 
                    activeClassName="active"
                    className="nav-link"  
                    to="/alldata/">
                        All Data
                        <span className="tooltiptext">View your account information. </span>
                </NavLink>      
            </div>       
        </nav>
    )
}

export default NavBar;