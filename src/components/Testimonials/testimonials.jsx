import React from 'react'
import './testimonials.css'
import Av1 from '../../assets/Av.avif'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Testimonials = () => {
  const test_Data = [
    {
      id:1,
      img:Av1,
      name: "Dummy",
      review:"This is A dummy review.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium placeat, fugiat nisi aspernatur molestiae earum veniam doloremque quis aperiam illo adipisci amet eligendi repellat. Consequatur accusantium fugit magnam facilis ad! Thank you for reading"
    },
    {
      id:2,
      img:Av1,
      name: "Dummy",
      review:"This is A dummy review.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium placeat, fugiat nisi aspernatur molestiae earum veniam doloremque quis aperiam illo adipisci amet eligendi repellat. Consequatur accusantium fugit magnam facilis ad!"
    },
    {
      id:3,
      img:Av1,
      name: "Dummy",
      review:"This is A dummy review.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium placeat, fugiat nisi aspernatur molestiae earum veniam doloremque quis aperiam illo adipisci amet eligendi repellat. Consequatur accusantium fugit magnam facilis ad!"
    },
    {
      id:4,
      img:Av1,
      name: "Dummy",
      review:"This is A dummy review."
    },
  ]
  return (
<section id='testimonials'>
  <h5>Reviews from clients</h5>
  <h2>Testimonials</h2>
  <Swiper className="container testimonials__container"
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Pagination]}
      >
    {
      test_Data.map(({id,img,name,review}) => {
        return (
          <SwiperSlide className="review__contents" key={id}>
            <div className="review-img">
              <img src={img} alt={name} />
            </div>
            <article className="review-content">
              <h5 className="review-name">{name}</h5>
              <p className="review-p text-light">{review}</p>
            </article>
          </SwiperSlide>
        )
      })
    }
  </Swiper>
</section>
  )
}

export default Testimonials