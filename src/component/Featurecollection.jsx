import React from "react";
import '../style/section/featurecollection.css'
import collection1 from '../asset/collection1-img.png'
import collection2 from '../asset/collection2-img.png'
import collection3 from '../asset/collection3-img.png'
import collection4 from '../asset/collection4-img.png'
import { useState } from "react";




export default function Featurecollection(props){

    const [swip, setswip] = useState();

    const Swiper = props.swiper;
    const SwiperSlide = props.swiperslide;
    const Pagination = props.pagination;
    // const Scrollbar = props.scrollbar;

    const previousslide = () => {swip.slidePrev();}
    const nextslide = () => {swip.slideNext();}

    return(
        <>
        <div className="feature_collection">
            <div className="page-width arrows_ref">
                <h2 className="h2 feature-collection-heading">{props.title}</h2>
                <Swiper className="mySwiper"
                    loop="true"
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        100: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        750: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        990: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                      }}
                    modules={[Pagination]} 
                    pagination={{ clickable: true }}
                    onSwiper={(swiper)=>{setswip(swiper)}}
                >
                <SwiperSlide className="slide_heo">
                    <div className="collection-img-heading">
                        <a href="#this" className="collection-img">
                            <img src={collection1} alt="collectionimg" loading="lazy"></img>
                        </a>
                        <a href="#this" className="p-heading collection-heading">CHECK COLORED T-SHIRT</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide_heo">
                    <div className="collection-img-heading">
                        <a href="#this" className="collection-img">
                            <img src={collection2} alt="collectionimg" loading="lazy"></img>
                        </a>
                        <a href="#this" className="p-heading collection-heading">CO-ORD SETS</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide_heo">
                    <div className="collection-img-heading">
                        <a href="#this" className="collection-img">
                            <img src={collection3} alt="collectionimg" loading="lazy"></img>
                        </a>
                        <a href="#this" className="p-heading collection-heading">FLORAL DRESS</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide_heo">
                    <div className="collection-img-heading">
                        <a href="#this" className="collection-img">
                            <img src={collection4} alt="collectionimg" loading="lazy"></img>
                        </a>
                        <a href="#this" className="p-heading collection-heading">DRAMATIC DISIGNS</a>
                    </div>
                </SwiperSlide>
                </Swiper>
                {/* <div className="feature-collections">
                    <div className="collection-img-heading">
                        <a href="#this" className="collection-img">
                            <img src={collection1} alt="collectionimg" loading="lazy"></img>
                        </a>
                        <a href="#this" className="p-heading collection-heading">CHECK COLORED T-SHIRT</a>
                    </div>
                    <div className="collection-img-heading">
                        <a href="#this" className="collection-img">
                            <img src={collection2} alt="collectionimg" loading="lazy"></img>
                        </a>
                        <a href="#this" className="p-heading collection-heading">CO-ORD SETS</a>
                    </div>
                    <div className="collection-img-heading">
                        <a href="#this" className="collection-img">
                            <img src={collection3} alt="collectionimg" loading="lazy"></img>
                        </a>
                        <a href="#this" className="p-heading collection-heading">FLORAL DRESS</a>
                    </div>
                </div> */}
            <div className="prev_button swiper-button-prev" onClick={previousslide}></div>
            <div className="next_button swiper-button-next" onClick={nextslide}></div>
            </div>
        </div>
        </>
    )
}