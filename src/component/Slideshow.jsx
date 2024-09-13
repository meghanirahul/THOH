import React from "react";
import '../style/section/slideshow.css'
import slideimg1 from '../asset/slideshow-img1.png'
import slideimg2 from '../asset/slideshow-img2.png'
import slideico1 from '../asset/slide-icon1.png'
import slideico2 from '../asset/slide-icon2.png'
import { Autoplay } from "swiper/modules";

export default function Slideshow(props) {
    const Swiper = props.swiper;
    const SwiperSlide = props.swiperslide;
    const Pagination = props.pagination;
    return (
        <>
            <div className="slideshow-main">
                <Swiper
                    spaceBetween={25}
                    slidesPerView={1}
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    autoplay={{delay: 5000}}
                    className="slideshoww"
                >
                    <SwiperSlide>
                        <div className="slide-background">
                            <div className="slide-text-images page-width">
                                <div className="slide-image1 slide-image-container">
                                    <div className="slide-images">
                                        <img src={slideimg1} alt="slide-show1" className="inner-img" loading="eager"></img>
                                        <img src={slideico1} alt="slide-icon" className="slide-icon1" loading="eager"></img>
                                    </div>
                                </div>
                                <div className="slide-image2 slide-image-container">
                                    <div className="slide-images">
                                        <img src={slideimg2} alt="slide-show2" className="inner-img" loading="eager"></img>
                                        <img src={slideico2} alt="slide-icon2" className="slide-icon2" loading="eager"></img>
                                    </div>
                                </div>
                                <div className="slide-text-content">
                                    <div className="slide-main">
                                        <h2 className="slide-heading"><span>NEW</span> SUMMER LOOK COLLECTION</h2>
                                    </div>
                                    <div className="slide-info">
                                        <p className="slide-descrption">Discover the essence of modern elegance with our latest collection, carefully curated to elevate your fashion game.</p>
                                    </div>
                                    <div className="slide-button">
                                        <div className="button">
                                            <a href="#name" className="p-heading button-contain">SHOP NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-background">
                            <div className="slide-text-images page-width">
                                <div className="slide-image1 slide-image-container">
                                    <div className="slide-images">
                                        <img src={slideimg2} alt="slide-show2" className="inner-img" loading="eager"></img>
                                        <img src={slideico2} alt="slide-icon2" className="slide-icon2" loading="eager"></img>

                                    </div>
                                </div>
                                <div className="slide-image2 slide-image-container">
                                    <div className="slide-images">
                                        <img src={slideimg1} alt="slide-show1" className="inner-img" loading="eager"></img>
                                        <img src={slideico1} alt="slide-icon" className="slide-icon1" loading="eager"></img>
                                    </div>
                                </div>
                                <div className="slide-text-content">
                                    <div className="slide-main">
                                        <h2 className="slide-heading"><span>NEW</span> SUMMER LOOK COLLECTION</h2>
                                    </div>
                                    <div className="slide-info">
                                        <p className="slide-descrption">Discover the essence of modern elegance with our latest collection, carefully curated to elevate your fashion game.</p>
                                    </div>
                                    <div className="slide-button">
                                        <div className="button">
                                            <a href="#name" className="p-heading button-contain">SHOP NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </>
    )
}