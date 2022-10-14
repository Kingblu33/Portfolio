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
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>SoftWare Engineer/ Full Stack Developer</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <div className="row">
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
                                    <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>Demmarblue@gmail.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
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