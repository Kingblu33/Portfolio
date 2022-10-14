import React from 'react'
import './Project.css'
import { ProjectList } from '../../Helpers/ProjectList'
import { useNavigate } from "react-router-dom";
const Project = () => {
    const navigate = useNavigate();
    return (
        <section className="content-section" id="portfolio">
            <div className="container px-4 px-lg-5">
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-0">Recent</h3>
                    <h2 className="mb-5">Projects</h2>
                </div>
                <div className="row gx-0">
                    {ProjectList.map((project, idx) => (
                        <div className="col-lg-6">
                            <a className="portfolio-item" key={idx} href="#!">
                                <div onClick={() => {
                                    navigate("/project/" + idx)
                                }} className="caption">
                                    <div className="caption-content">
                                        <div className="h2">{project.name}</div>
                                        <p className="mb-0">{project.skills}</p>
                                    </div>
                                </div>
                                <img className="img-fluid" src={project.image} alt="..." autoPlay loop muted />
                            </a>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Project