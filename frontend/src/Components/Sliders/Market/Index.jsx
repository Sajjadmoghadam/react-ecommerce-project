import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css'

import { Navigation } from 'swiper/modules';


export default function MarketSlider() {
    return (
        <>
           
           <Swiper  navigation={true} modules={[Navigation]}  className="marketSlider">
                <SwiperSlide><img src="assets/image/marketSlider/1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/marketSlider/2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/marketSlider/3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/marketSlider/4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="assets/image/marketSlider/5.jpg" alt="" /></SwiperSlide>
            </Swiper>
            </>
            )
}
