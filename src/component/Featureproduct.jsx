import React from "react";
import '../style/section/featureproduct.css'
import productimg1 from '../asset/product1-img.png'
import productimg2 from '../asset/product2-img.png'
import productimg3 from '../asset/product3-img.png'
import productimg4 from '../asset/product4-img.png'
import productimg5 from '../asset/product5-img.png'
import { ReactComponent as Carticon } from '../asset/cart-logo.svg'
import { useState } from "react";
import { Link } from 'react-router-dom'

function Featureproduct(props) {

    const [swip, setswip] = useState();

    const Swiper = props.swiper;
    const SwiperSlide = props.swiperslide;
    const Pagination = props.pagination;

    const previousslide = () => {swip.slidePrev();}
    const nextslide = () => {swip.slideNext();}
    
    return (
        <>
            <div className="feature-product-main">
                <div className="page-width arrows_ref">
                    <div className="featureproduct-heading">
                        <h2 className="h2">TOP PICKS FOR YOU</h2>
                    </div>
                    <div className="featureproducts">
                        <Swiper
                            loop="true"
                            spaceBetween={20}
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
                                990: {
                                  slidesPerView: 4,
                                  spaceBetween: 30,
                                },
                              }}
                            modules={[Pagination]} 
                            pagination={{ clickable: true }}
                            onSwiper={(swiper)=>{setswip(swiper)}}
                        >
                            <SwiperSlide>
                                <div className="product-contain">
                                    <div className="product-img-cart">
                                        <div className="product-img">
                                            <img src={productimg1} alt="product1"></img>
                                        </div>
                                        <div className="product-cart">
                                            <Link to="/product/half-sleev-jacket-beige" className="product-inlinecart">
                                                <span className="p-heading">ADD TO CART</span>
                                                <span><Carticon /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="productinfo">
                                        <div className="product-title">
                                            <p className="p-heading product-name">Half Sleev Jacket - Beige</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="h2 final-price"><span> $ </span>1000</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-contain">
                                    <div className="product-img-cart">
                                        <div className="product-img">
                                            <img src={productimg2} alt="product2"></img>
                                        </div>
                                        <div className="product-cart">
                                            <Link to="/product/summer-half-sleev-hoodie" className="product-inlinecart">
                                                <span className="p-heading">ADD TO CART</span>
                                                <span><Carticon /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="productinfo">
                                        <div className="product-title">
                                            <p className="p-heading product-name">Summer Half Sleev Hoodie</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="h2 final-price"><span> $ </span>1250</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-contain">
                                    <div className="product-img-cart">
                                        <div className="product-img">
                                            <img src={productimg3} alt="product3"></img>
                                        </div>
                                        <div className="product-cart">
                                            <Link to="/product/half-sleev-ribbed-shirt-street-style" className="product-inlinecart">
                                                <span className="p-heading">ADD TO CART</span>
                                                <span><Carticon /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="productinfo">
                                        <div className="product-title">
                                            <p className="p-heading product-name">Green Jumper with Pink T-shirt</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="h2 final-price"><span> $ </span>1100</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-contain">
                                    <div className="product-img-cart">
                                        <div className="product-img">
                                            <img src={productimg4} alt="product4"></img>
                                        </div>
                                        <div className="product-cart">
                                            <Link to="/product/summer-beach-tank-top" className="product-inlinecart">
                                                <span className="p-heading">ADD TO CART</span>
                                                <span><Carticon /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="productinfo">
                                        <div className="product-title">
                                            <p className="p-heading product-name">Summer Beach Tank Top</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="h2 final-price"><span> $ </span>9500</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-contain">
                                    <div className="product-img-cart">
                                        <div className="product-img">
                                            <img src={productimg5} alt="product4"></img>
                                        </div>
                                        <div className="product-cart">
                                            <Link to="#this" className="product-inlinecart">
                                                <span className="p-heading">ADD TO CART</span>
                                                <span><Carticon /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="productinfo">
                                        <div className="product-title">
                                            <p className="p-heading product-name">Flowerfull T-shirt</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="h2 final-price"><span> $ </span>4500</p>
                                        </div>
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

export default Featureproduct;