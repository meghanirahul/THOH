import '../style/fontfamily.css'
import '../style/base.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Grid } from 'swiper/modules';
import 'swiper/css/bundle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../component/Header'
import Footer from '../component/Footer'
import Index from './Index'
import Collection from './Collection'
import Product from './Product'
import Cartdrawer from './Cartdrawer'
import Account from './Account'
import Error from '../component/Error'
import { useState } from 'react';


export default function Mainroot() {
    const [datac, setdatac] = useState(null);
    const dataCart = (data) => {
        console.log(data);
        setdatac(data)
        console.log(datac)
    }
    return (
        <>

            <BrowserRouter>
                <Header passCartData={datac} />
                <Cartdrawer passCartData={datac} />
                <Routes>
                    <Route index element={<Index swiper={Swiper} swiperslide={SwiperSlide} navigation={Navigation} pagination={Pagination}
                        scrollbar={Scrollbar} grid={Grid} />} />
                    <Route path='collection' element={<Collection />} />
                    <Route path='account' element={<Account />} />
                    <Route path='product/:handle' element={<Product swiper={Swiper} swiperslide={SwiperSlide} navigation={Navigation} pagination={Pagination}
                        scrollbar={Scrollbar} grid={Grid} cartData={dataCart} />} />
                    <Route path='404/error' element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>

        </>
    )
}