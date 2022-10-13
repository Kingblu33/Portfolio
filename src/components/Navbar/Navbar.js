import React, { useState } from 'react'
import './Navbar.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
  const [show, setShow] = useState(true)
  return (

    <nav className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0 ">
      <div className="container">
        <a className="navbar-brand" href="#">Demmar Allen</a>
        <button className="navbar-toggler" onClick={() => setShow(!show)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'} id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link px-3" href="#!">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#!">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#!">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#!">contact Me</a>
            </li>
          </ul>

          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link " href="">
                <AiFillYoutube className='icons' />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="">
                <AiFillLinkedin className='icons ' />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <AiFillGithub className='icons' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <>{show}</>
    </nav>
  )
}

export default Navbar