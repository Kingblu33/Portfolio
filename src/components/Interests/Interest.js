import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillHtml5 } from 'react-icons/ai'
import { SiCss3 } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { DiPython } from 'react-icons/di'
import { SiMysql } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa'
import { DiReact } from 'react-icons/di'
import { DiMongodb } from 'react-icons/di'
import { SiSpringboot } from 'react-icons/si'
import './Interest.css'

const Interest = () => {
    return (
        <div className="interests container">

            <div className="section-title">
                <h2>Skills</h2>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4">
                    <div className="icon-box">
                        <i><AiFillGithub /></i>
                        <h3>Github</h3>
                    </div>
                </div>
                <div className="col-lg -3 col-md-4 mt-4 mt-md-0">
                    <div className="icon-box">
                        <i ><AiFillHtml5 /></i>
                        <h3>Html</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div className="icon-box">
                        <i><SiCss3 /></i>
                        <h3>Css</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                    <div className="icon-box">
                        <i><IoLogoJavascript /></i>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i><DiPython /></i>
                        <h3>Python</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i><SiMysql /></i>
                        <h3>MySql</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i><SiPostgresql /></i>
                        <h3>PostgreSQL</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i><FaJava /></i>
                        <h3>Java</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i><FaAws /></i>
                        <h3>Aws</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i><DiReact /></i>
                        <h3>React</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i><DiMongodb /></i>
                        <h3>MongoDb</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i><SiSpringboot /></i>
                        <h3>Spring Boot</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Interest