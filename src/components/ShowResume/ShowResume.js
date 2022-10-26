import React from 'react'
import Resume from '../../assets/Demmar Resume 2022.pdf'
import './ShowResume.css'
import '../../index.css'
const ShowResume = () => {
    return (
        <div className='experience container'>
            <h1 className='text-secondary'>Resume</h1>
            <hr className='divider' />
            <iframe className='resume' src={Resume} />
            <div>
                <button className='button-36'>Download Resume<a href={Resume} download></a></button>
            </div>

        </div >
    )
}

export default ShowResume