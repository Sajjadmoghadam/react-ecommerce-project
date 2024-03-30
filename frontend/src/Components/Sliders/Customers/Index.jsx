import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import './style.css'

export default function Customers() {
    return (
        <>

            <Swiper
                breakpoints={{
                    1200:{
                        slidesPerView:6
                    },
                    900:{
                        slidesPerView:4
                    },
                    600:{
                        slidesPerView:3
                    },
                    200:{
                        slidesPerView:2
                    }

                }
                }
                loop={true}
                spaceBetween={30}
                className="myCustomers"
            >
                <SwiperSlide><img src="assets/image/customers/1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/5.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/6.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/7.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/8.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/9.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/10.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/11.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/12.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/13.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/14.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/15.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/16.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/17.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/18.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/customers/19.jpg" alt="" /></SwiperSlide>

            </Swiper>

        </>
    )
}
