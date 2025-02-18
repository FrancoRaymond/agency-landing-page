import React from 'react'
import './features.css'
import imageTransformDesktop from '../../assets/images/desktop/image-transform.jpg'
import imageTransformMobile from '../../assets/images/mobile/image-transform.jpg'
import imageStandoutktop from '../../assets/images/desktop/image-stand-out.jpg'
import imageStandoutMobile from '../../assets/images/mobile/image-stand-out.jpg'



const Features = ({ size }) => {
    
    return(
        <div className='features'>
            <article>
                <img src={size < 500 ? imageTransformMobile : imageTransformDesktop} alt="" />
                <div className='infoArea'>
                    <h1>Transform your brand</h1>
                    <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <button>Learn more</button>
                </div>
            </article>
            <article>
                <img src={size < 500 ? imageStandoutMobile : imageStandoutktop} alt="" />
                <div className='infoArea'>
                    <h1>Stand out to the right audience</h1>
                    <p>Using a collaborative formula of designers,researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital places.</p>
                    <button>Learn more</button>
                </div>
            </article>
        </div>
    )
}

export default Features