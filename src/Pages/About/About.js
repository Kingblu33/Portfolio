import React from 'react'
import Footer from '../../components/Footer/Footer'
import Interest from '../../components/Interests/Interest'
import Navbar from '../../components/Navbar/Navbar'
import me from '../../Images/gojo.jpg'
const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-me container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>Learn more about me</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={me} className="img-fluid rounded-circle m-b" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content pb-4" data-aos="fade-left">
                        <h3>SoftWare Engineer/ Full Stack Developer</h3>

                        <div className="row pt-3">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>9 May 2000</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.DemmarAllen.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+1 (407)9556268</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Allentown , Pa</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Associates</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email</strong> <span>Demmarblue@gmail.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p style={{ fontSize: "18px" }}>
                            I am currently a Software Engineer/Full Stack Engineer. I am passionate about learning how things work and enjoy the process of learning new technologies that I can apply to my work and personal projects. I'm also passionate about game design and making content for Youtube/Twitch. Feel free to reach out for anything.
                        </p>
                    </div>
                </div>

            </div>

            <Interest />

            <Footer />

        </>
    )
}

export default About