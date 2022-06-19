import React from "react";
import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Clients } from "./Clients";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Testimonial = () => {

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="testimonial_title">
        <h4>Testimoniala</h4>
        <h1>what, some of my clients say About me!</h1>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {Clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
