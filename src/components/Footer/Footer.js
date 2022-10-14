import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer text-center">
            <div className="container px-4 px-lg-5">
                <ul className="list-inline mb-5">
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle mr-3" href="https://www.youtube.com/channel/UCAKZV-7YHr-toMXeK1p-X8g" target="_blank"><AiFillYoutube /></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle  mr-3" href="https://www.linkedin.com/in/demmar-allen-94179b194/" target="_blank"><AiFillLinkedin /></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle" href="https://github.com/Kingblu33" target="_blank"><AiFillGithub /></a>
                    </li>
                </ul>
                <p className="text-muted small mb-0">Copyright &copy; Demmar Allen 2022</p>
            </div>
        </footer>
    )
}

export default Footer