import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
        <footer class="footer text-center">
            <div class="container px-4 px-lg-5">
                <ul class="list-inline mb-5">
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white mr-3" href="#!"><AiFillYoutube /></a>
                    </li>
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white mr-3" href="#!"><AiFillLinkedin /></a>
                    </li>
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white " href="#!"><AiFillGithub /></a>
                    </li>
                </ul>
                <p class="text-muted small mb-0">Copyright &copy; Demmar Allen 2022</p>
            </div>
        </footer>
    )
}

export default Footer