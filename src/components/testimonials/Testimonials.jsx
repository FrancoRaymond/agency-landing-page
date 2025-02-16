import React from 'react'
import './testimonials.css'
import { testimonials } from '../../data/testimonials'

const Testimonials = () => {
  return (
    <div className='clientTestimonials'>
        <h1>CLIENT TESTIMONIALS</h1>
        <div className='testimonials'>
            {
                testimonials.map(person => (
                    <div key={person.id}>
                        <img src={person.image} alt="" />
                        <p>{person.description}</p>
                        <h3>{person.name}</h3>
                        <span>{person.position}</span>
                    </div>
                ))
            }
        </div> 
    </div>
  )
}

export default Testimonials
