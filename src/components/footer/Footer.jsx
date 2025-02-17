import React from 'react'
import './footer.css'
import logo from '../../assets/images/footer-logo.svg'
import fb from '../../assets/images/icon-facebook.svg'
import insta from '../../assets/images/icon-instagram.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import  pinterest from '../../assets/images/icon-pinterest.svg'

const Footer = () => {

  return (
    <div className='footer'>
        <div className="innerDiv">
            <img src={logo} alt="" className='logo'/>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <div className='socialsDiv'>
                <img src={fb} alt="" />
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer
