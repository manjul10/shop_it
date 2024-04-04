import React from 'react'
import './index.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
const Navigation = () => {
  return (
    <nav className="nav">
      <div className="logo-and-text">
        <img src={logo} alt="This is logo" className="nav-img" />
        <span className="title">SHOPIT</span>
      </div>

      <ul className="list">
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
      </ul>
      <div className="profile-wraper">
        <img src={profile} alt="Profile Image" className="profile" />
      </div>
    </nav>
  )
}

export default Navigation
