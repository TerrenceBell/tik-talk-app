  
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navigation">
        <div className="container">
          <NavLink to="/">Home</NavLink>
          <ul className="right">
            <li><NavLink to="/chat">Chat</NavLink></li>
            <li><NavLink to="/About">About this app</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar