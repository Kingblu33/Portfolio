import React from 'react'
import Contact from '../../components/Contact/Contact'
import Navbar from '../../components/Navbar/Navbar'
import Project from '../../components/Projects/Project'
import Footer from '../../components/Footer/Footer'
const Home = () => {
    return (
        <>
            <Navbar />
            <Project />
            <Contact />
            <Footer />
        </>
    )
}

export default Home