
import Slideshow from '../component/Slideshow.jsx'
import Featurecollection from '../component/Featurecollection.jsx'
import Featureproduct from '../component/Featureproduct.jsx'
import Imagewithtext from '../component/Imagewithtext.jsx'
import Videosection from '../component/Videosection.jsx'
import Brandssection from '../component/Brandssection.jsx'
import Iconwithtext from '../component/Iconwithtext.jsx'


export default function Index(prop){
    const Swiper = prop.swiper;
    const SwiperSlide = prop.swiperslide;
    const Navigation = prop.navigation;
    const Pagination = prop.pagination;
    const Scrollbar = prop.scrollbar;
    return(
        <>
        <Slideshow 
        swiper={Swiper} 
        swiperslide={SwiperSlide} 
        navigation={Navigation} 
        pagination={Pagination} 
        Scrollbar={Scrollbar}/>
        <Featurecollection 
        title="SHOP ALL COLLECTION" 
        swiper={Swiper} 
        swiperslide={SwiperSlide} 
        navigation={Navigation} 
        pagination={Pagination} 
        Scrollbar={Scrollbar}/>
        <Featureproduct 
        swiper={Swiper} 
        swiperslide={SwiperSlide} 
        navigation={Navigation} 
        pagination={Pagination} 
        Scrollbar={Scrollbar}/>
        <Imagewithtext />
        <Videosection />
        <Brandssection 
        title="SHOP TOP BRANDS"
        swiper={Swiper} 
        swiperslide={SwiperSlide} 
        navigation={Navigation} 
        pagination={Pagination} 
        Scrollbar={Scrollbar}/>
        <Iconwithtext
        swiper={Swiper} 
        swiperslide={SwiperSlide} 
        navigation={Navigation} 
        pagination={Pagination} 
        Scrollbar={Scrollbar} />
        </>
    )
}