import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form)

        emailjs.sendForm('service_sb6q5yi', 'template_cv30z22', form.current, 'ohSAGUYHIGf40Xtj3')
            .then((result) => {
                console.log(result.text);
            })
            .catch((error) => {
                console.log(error.text);
            });

        e.target.reset()
        alert("Message successfully sent thank you!");
    };

    return (
        <section classname="page-section">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">Let's Get In Touch!</h2>
                        <hr className="divider  " />
                        <p className="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">

                        <form ref={form} id="contactForm fluid"
                            onSubmit={sendEmail}>

                            <div class="form-floating mb-3">
                                <input name='name' className="form-control" type="text" placeholder="Enter your name..." required />
                                <label >Full name</label>


                            </div>
                            <div classname="form-floating mb-3">
                                <input name='email' className="form-control" type="email" placeholder="name@example.com" required />
                                <label >Email address</label>

                            </div>
                            <div className="form-fluid mb-3">
                                <textarea name='message' className="form-control" type="text" placeholder="Enter your message here..." required ></textarea>
                                <label >Message</label>
                            </div>
                            <div className="d-grid"><button className="button-36" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-4 text-center mb-5 mb-lg-0">
                        <i className="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>+1 (555) 123-4567</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact