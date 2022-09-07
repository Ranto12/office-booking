import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Bgprimary } from "../../../assets";

const index = () => {
  return (
    <div className=" mx-32">
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=""
      >
            <div>
            <SwiperSlide className="h-96 rounded-xl bg-opacity-0">
                <img src={Bgprimary} alt="bg" className="rounded-xl"/>
            </SwiperSlide>
            </div> 
            <div>
            <SwiperSlide className="h-96 rounded-xl">
                <img src={Bgprimary} alt="bg" className="rounded-xl"/>
            </SwiperSlide>
            </div>  
            <div>
            <SwiperSlide className="h-96 rounded-xl">
                <img src={Bgprimary} alt="bg" className="rounded-xl"/>
            </SwiperSlide>
            </div>                   
        
      </Swiper>
    </div>
  )
}

export default index