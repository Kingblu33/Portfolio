import React from 'react'
import { useParams } from "react-router-dom";
import { AiFillGithub } from 'react-icons/ai';
import { ProjectList } from '../../Helpers/ProjectList';
import Navbar from '../../components/Navbar/Navbar';
import './ShowProject.css'
import Footer from '../../components/Footer/Footer';


const ShowProject = () => {

    const { id } = useParams();
    const project = ProjectList[id]
    return (
        <>
            <Navbar />
            <div className="project container">

                <h1> {project.name}</h1>
                <video src={project.video} controls autoPlay />
                <p>
                    Skills: {project.skills}
                </p>
                <a className='icons mb-3' href={project.Github} target="_blank"><AiFillGithub /></a>
                <a href={project.liveView ? project.liveView : project.Github} target="_blank"><button className='button-36'>Live View</button></a>


            </div>
            <Footer />
        </>
    )
}

export default ShowProject