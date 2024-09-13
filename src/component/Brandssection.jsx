import React from "react";
import '../style/section/brandssection.css'
import { ReactComponent as Logo1 } from '../asset/Brand1.svg'
import { ReactComponent as Logo2 } from '../asset/Brand2.svg'
import { ReactComponent as Logo3 } from '../asset/Brand3.svg'
import { ReactComponent as Logo4 } from '../asset/Brand4.svg'
import brandlogo1 from '../asset/brandimg1.png'
import brandlogo2 from '../asset/brandimg2.png'
import brandlogo3 from '../asset/brandimg3.png'
import brandlogo4 from '../asset/brandimg4.png'
import { useState } from "react";

export default function Brandssection(props) {
    const [swip, setswip] = useState();

    const Swiper = props.swiper;
    const SwiperSlide = props.swiperslide;
    const Pagination = props.pagination;

    const previousslide = () => { swip.slidePrev(); }
    const nextslide = () => { swip.slideNext(); }
    return (
        <>
            <div className="brands-section">
                <div className="page-width arrows_ref">
                    <div className="bsection-heading">
                        <h2 className="h2">{props.title}</h2>
                    </div>
                    <div className="brands-contain">
                        <Swiper
                            spaceBetween={25}
                            slidesPerView={4}
                            breakpoints={{
                                100: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                750: {
                                  slidesPerView: 3,
                                  spaceBetween: 30,
                                },
                                1024: {
                                  slidesPerView: 4,
                                  spaceBetween: 30,
                                },
                              }}
                            modules={[Pagination]} 
                            pagination={{ clickable: true }}
                            onSwiper={(swiper)=>{setswip(swiper)}}
                        >
                            <SwiperSlide>
                                <div className="brand-img">
                                    <img src={brandlogo1} alt="H&M brand logo103" className="surug"></img>
                                    <div className="brand-logo">
                                        <Logo1 />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-img">
                                    <img src={brandlogo2} alt="ZARA brand logo" className="surug"></img>
                                    <div className="brand-logo">
                                        <Logo2 />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-img">
                                    <img src={brandlogo3} alt="GAP brand logo" className="surug"></img>
                                    <div className="brand-logo">
                                        <Logo3 />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-img">
                                    <img src={brandlogo4} alt="DKNY brand logo" className="surug"></img>
                                    <div className="brand-logo">
                                        <Logo4 />
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* <SwiperSlide>
                                <div className="brand-img">
                                    <img src={brandlogo4} alt="DKNY brand logo" className="surug"></img>
                                    <div className="brand-logo">
                                        <Logo4 />
                                    </div>
                                </div>
                            </SwiperSlide> */}
                        </Swiper>
                    </div>
                    <div className="prev_button swiper-button-prev" onClick={previousslide}></div>
                    <div className="next_button swiper-button-next" onClick={nextslide}></div>
                </div>
            </div>
        </>
    )
}