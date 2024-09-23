import React from "react";
import { useState, useEffect } from 'react';
import '../style/section/productmain.css'
import Featureproduct from "../component/Featureproduct";
import Videosection from "../component/Videosection";
import Productmain from '../component/Productmain';
import { useParams } from "react-router-dom";
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database';

export default function Product(prop) {
    const Swiper = prop.swiper;
    const SwiperSlide = prop.swiperslide;
    const Navigation = prop.navigation;
    const Pagination = prop.pagination;
    const Scrollbar = prop.scrollbar;
    const Grid = prop.grid;


    const { handle } = useParams();
    console.log('handle =', handle)

    const [product, setproduct] = useState();
    useEffect(() => {
        async function fetchdata() {
            try {
                const firebaseConfig = {
                    apiKey: `${process.env.REACT_APP_apiKey}`,
                    authDomain: `${process.env.REACT_APP_authDomain}`,
                    projectId: `${process.env.REACT_APP_projectId}`,
                    storageBucket: `${process.env.REACT_APP_storageBucket}`,
                    messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
                    appId: `${process.env.REACT_APP_appId}`,
                    measurementId: `${process.env.REACT_APP_measurementId}`,
                    databaseURL: `${process.env.REACT_APP_databaseURL}`,
                    uid: `${process.env.REACT_APP_uid}`
                }
                const app = initializeApp(firebaseConfig);
                const database = getDatabase(app);
                const productref = ref(database, "products/" + handle);
                onValue(productref, (snapshot) => {
                    const productdata = snapshot.val();
                    console.log("postElement", productdata);
                    setproduct(productdata);
                })
            }
            catch (err) {
                console.log('fetch error', err);
            }
        }
        fetchdata();
    }, [handle])

    const cartData = (data) => {
        prop.cartData(data);
    }

    return (
        <>
            <Productmain
                swiper={Swiper}
                swiperslide={SwiperSlide}
                navigation={Navigation}
                pagination={Pagination}
                scrollbar={Scrollbar}
                grid={Grid}
                product={product}
                dataCart={cartData} />
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