import React, { useState } from 'react'
import './Navbar.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
  const [show, setShow] = useState(true)
  return (

    <nav className="navbar navbar-expand-lg navbar-scroll shadow-0 ">
      <div className="container">
        <a className="navbar-brand" href="/">Demmar Allen</a>
        <button className="navbar-toggler" onClick={() => setShow(!show)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'} id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link px-3" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/#portfolio">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/view/resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="mailto:demmarblue@gmail.com">Contact Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/about">About</a>
            </li>
          </ul>

          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link " href="https://www.youtube.com/channel/UCAKZV-7YHr-toMXeK1p-X8g" target="_blank">
                <AiFillYoutube className='icons' />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="https://www.linkedin.com/in/demmar-allen-94179b194/" target="_blank">
                <AiFillLinkedin className='icons ' />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/Kingblu33" target="_blank">
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