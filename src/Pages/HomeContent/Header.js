import './Home.css'
import enrollBtn from "../../../src/img/home/enrollButton.webp"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import slider1 from "./../../img/home/slider1.webp"
import slider2 from "./../../img/home/slider2.webp"
import slider3 from "./../../img/home/slider3.webp"

const Header = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="homeHeaderBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="homeHeaderEnrollBtn">
                                    <img src={enrollBtn} alt="enrollBtn" className='img-fluid' />
                                    <p>Enroll your child at little lambs nursery Now!!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="homeHeaderSlider">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={80}
                                    freeMode={true}
                                    // autoplay={{
                                    //     delay: 2500,
                                    //     disableOnInteraction: false,
                                    // }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Autoplay, FreeMode, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className='headerSliderImg'>
                                            <img src={slider1} alt="slider" className='img-fluid' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='headerSliderImg'>
                                            <img src={slider2} alt="slider" className='img-fluid' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='headerSliderImg'>
                                            <img src={slider3} alt="slider" className='img-fluid' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='headerSliderImg'>
                                            <img src={slider1} alt="slider" className='img-fluid' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='headerSliderImg'>
                                            <img src={slider2} alt="slider" className='img-fluid' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='headerSliderImg'>
                                            <img src={slider3} alt="slider" className='img-fluid' />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header