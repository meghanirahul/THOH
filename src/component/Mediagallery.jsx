import React from "react";
import '../style/section/mediagallery.css'
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { Controller, Thumbs } from 'swiper/modules';



export default function Mediagallery(swip) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef();
  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  // const swiperRef = useRef(null);
  const [tomal, settomal] = useState();
  // const [firstSwiper, setFirstSwiper] = useState(null);
  // const [secondSwiper, setSecondSwiper] = useState(null);
  useEffect(() => {
    window.addEventListener("load", size);
    window.addEventListener("resize", size);
    function size(event) {
      let wsize = document.body.clientWidth;
      if (wsize < 990) { settomal(989) } else { settomal(990) };
      return wsize;
    }
    let changedsize = size();
    console.log(changedsize);
  }, [tomal])
  const Swiper = swip.swiper;
  const SwiperSlide = swip.swiperslide;
  const Pagination = swip.pagination;
  const Grid = swip.grid;
  const Navigation = swip.navigation;
  // const Scrollbar = swip.scrollbar;
  const openproduct = swip.open;
  const media = swip.media;
  // console.log(media);
  return (
    <>
      <div className="gallery-main">
        {(typeof (media) === 'object') ? (
          <Swiper
            onSwiper={(swiper) => {
              if (swiper1Ref.current !== null) {
                swiper1Ref.current = swiper;
              }
            }}
            slidesPerView={(tomal < 990) ? (1) : (2)}
            grid={(tomal < 990) ? ({
              rows: 1,
            }) : ({
              rows: 2,
            })}
            spaceBetween={15}
            navigation={(tomal < 990) ? (false) : (true)}
            pagination={(tomal < 990) ? (false) : ({ clickable: true, })}
            modules={[Thumbs, Controller, Grid, Pagination, Navigation]}
            // controller={{ control: secondSwiper }}
            thumbs={{
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="mySwiper"
          >
            {media.map((value, index) => {
              return <SwiperSlide>
                <div className="p_img m_gallery1" onClick={openproduct}>
                  <img src={require(`../upload/${value}`)} alt="productpageimg" width="100%" height="100%" loading="lazy" tabIndex={index} key={index}></img>
                </div>
              </SwiperSlide>
            })}
          </Swiper>) : ('loading...')}



      </div>








      {(typeof (media) === 'object') ? (
        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Thumbs, Controller, Pagination, Navigation]}
          onSwiper={setThumbsSwiper}
          // controller={{ control: firstSwiper }}
          breakpoints={{
            0: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 5,
            },
            400: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 5,
            },
            750: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 5,
            },
            990: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 5,
            },
            1200: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 5,
            },
          }}
          className={(tomal < 990) ? ("thumb_block") : ("thumb_hidden")}
        >
          {media.map((value, index) => {
            return <SwiperSlide>
              <div className="p_img m_gallery1">
                <img src={require(`../upload/${value}`)} alt="productpageimg" width="100%" height="100%" loading="lazy" tabIndex={index} key={'m'+index}></img>
              </div>
            </SwiperSlide>
          })}
        </Swiper>) : ('loading...')}


    </>
  )
}