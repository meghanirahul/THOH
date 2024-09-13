import React from "react";
import { useState, useEffect } from 'react';
import '../style/section/productmain.css'
import Featureproduct from "../component/Featureproduct";
import Videosection from "../component/Videosection";
import Productmain from '../component/Productmain';
import { useParams } from "react-router-dom";

export default function Product(prop) {
    const Swiper = prop.swiper;
    const SwiperSlide = prop.swiperslide;
    const Navigation = prop.navigation;
    const Pagination = prop.pagination;
    const Scrollbar = prop.scrollbar;
    const Grid = prop.grid;

    const { handle } = useParams();
    console.log('handle =',handle)

    const[product, setproduct] = useState(); 
    useEffect(() => {
        async function fetchdata() {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/product/${handle}`, {
                    headers: { 'ContentType': 'application/json' }
                });
                const respondata = await response.json().then(
                    data => { return data}
                )
                console.log(respondata);
                if(respondata.message === "Error reading file"){
                    window.location.replace('http://localhost:3000/404/error')
                }
                else{
                    setproduct(respondata);
                }
            }
            catch (err) {
                console.log('fetch error', err);
            }
        }
        fetchdata();
    }, [handle])

    return (
        <>
            <Productmain 
                swiper={Swiper}
                swiperslide={SwiperSlide}
                navigation={Navigation}
                pagination={Pagination}
                scrollbar={Scrollbar} 
                grid={Grid}
                product={product}/>
            <Featureproduct
                swiper={Swiper}
                swiperslide={SwiperSlide}
                navigation={Navigation}
                pagination={Pagination}
                scrollbar={Scrollbar} />
            <Videosection />
        </>
    )
}