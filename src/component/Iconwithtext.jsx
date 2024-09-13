import React from "react";
import '../style/section/iconwithtext.css'
import { ReactComponent as Icongrow1 } from '../asset/icongrow1.svg'
import { ReactComponent as Icongrow2 } from '../asset/icongrow2.svg'
import { ReactComponent as Icongrow3 } from '../asset/icongrow3.svg'
import { useState } from "react";

export default function Iconwithtext(props) {
    const [swip, setswip] = useState();
    const Swiper = props.swiper;
    const SwiperSlide = props.swiperslide;
    const Pagination = props.pagination;
    const previousslide = () => { swip.slidePrev(); }
    const nextslide = () => { swip.slideNext(); }
    return (
        <>
            <div className="iconwith-text">
                <div className="page-width arrows_ref">
                    <div className="icontext-contain">
                        <Swiper
                            spaceBetween={25}
                            slidesPerView={3}
                            breakpoints={{
                                100: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                750: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                990: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => { setswip(swiper) }}
                            className="aliamain"
                        >
                            <SwiperSlide className="ali_strech">
                                <div className="icontext-box">
                                    <div className="icon-blow">
                                        <Icongrow1 />
                                    </div>
                                    <div className="text-blow">
                                        <h4 className="h4">Complimentary Shipping</h4>
                                        <p>Enjoy free shipping on US over $100.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="ali_strech">
                                <div className="icontext-box">
                                    <div className="icon-blow">
                                        <Icongrow2 />
                                    </div>
                                    <div className="text-blow">
                                        <h4 className="h4">Quality crafted</h4>
                                        <p>Designed with you and the planet in mind.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="ali_strech">
                                <div className="icontext-box">
                                    <div className="icon-blow">
                                        <Icongrow3 />
                                    </div>
                                    <div className="text-blow">
                                        <h4 className="h4">Come and shop from here</h4>
                                        <p>We have 12 stores across the US</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="prev_button swiper-button-prev" onClick={previousslide}></div>
                    <div className="next_button swiper-button-next" onClick={nextslide}></div>
                </div>
            </div>
        </>
    )
}