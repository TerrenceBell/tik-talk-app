  
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  navStyle = { 
    color: 'white'
  }
  render() {
    return (
      <nav className="nav">
        {/* <div className="nav-container"> */}
        <ul className="nav-links">
            <li><NavLink style={this.navStyle} to="/">Home</NavLink></li>
            <li><NavLink style={this.navStyle} to="/chat">Chat</NavLink></li>
            <li><NavLink style={this.navStyle} to="/About">About this app</NavLink></li>
          </ul>
        {/* </div> */}
      </nav>
    )
  }
}

export default NavBar