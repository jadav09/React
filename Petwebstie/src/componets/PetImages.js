import React from 'react'
import insta1 from '../images/insta1.jpg'

function PetImages() {
    return (
        <div className='pet-images-wrap'>
            {/* <div className='container-fluid'> */}
            {/* <div className='row'> */}
            <div className='pet-images-box'>
                <img src={insta1} alt="" />
            </div>

            <div className='pet-images-box'>
                <img src={insta1} alt="" />
            </div>

            <div className='pet-images-box'>
                <img src={insta1} alt="" />
            </div>

            <div className='pet-images-box'>
                <img src={insta1} alt="" />
            </div>

            <div className='pet-images-box'>
                <img src={insta1} alt="" />
            </div>

            <div className='pet-images-box'>
                <img src={insta1} alt="" />
            </div>
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default PetImages