import React from 'react'
import './Testimonials.css'

import AVATAR1 from "../../assets/AVATAR1.jpg"
import AVATAR2 from "../../assets/AVATAR2.jpg"
import AVATAR3 from "../../assets/AVATAR3.jpg"

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    image: AVATAR1,
    name: 'Optimus Prime',
    review: "Freedom is your right. If you make that request, we will honour it."
    },
  {
    image: AVATAR2,
    name: 'Bumblebee',
    review: 'I have come here to chew bubble gum and kick ass, and I\'m all out of bubble gum.'
  },
  {
    image: AVATAR3,
    name: 'Ironhide',
    review: 'Just kidding. I just wanted to show him my cannons. '
  }
]

const Testimonials = () => {
  return (
    <section id = 'testimonials'>

      <div className="testimonials">
        <h5>Reviews From Clients</h5>
        <h2>Testimonials</h2>
      </div>
      
        <Swiper className="container testimonials__container"
        // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >

        {
          data.map(({image, name, review}) => {
            return(
              <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                  <img src={image} alt=""/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          }
          )
        }
          
          
        </Swiper>
      </section>
  )
}

export default Testimonials