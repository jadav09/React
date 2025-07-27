import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import SliderDetails from './SliderDetails';
import banner1 from './images/banner-img.png'
import banner2 from './images/banner_img_2.png'
import banner3 from './images/banner_img_3.png'


function SliderSwiper() {
    return (
        <div className='pt-100 swiper-main'  >
            <Swiper
                direction="horizontal"
                pagination={{ clickable: true }}
                navigation={false}
                modules={[Navigation, Pagination]}
            >

                <SwiperSlide >
                    <SliderDetails
                    swiper_discount={'Save 10 - 20 % off'} 
                    swiper_banner_text={'Best destination for'}
                    swiper_banner_span={'your pets'}
                    siwper_img={banner1}
                    />
                </SwiperSlide>

                 <SwiperSlide >
                    <SliderDetails
                    swiper_discount={'Save 10 - 20 % off'} 
                    swiper_banner_text={'Best destination for'}
                    swiper_banner_span={'your pets'}
                    siwper_img={banner2}
                    />
                </SwiperSlide>


                 <SwiperSlide >
                    <SliderDetails
                    swiper_discount={'Save 10 - 20 % off'} 
                    swiper_banner_text={'Best destination for'}
                    swiper_banner_span={'your pets'}
                    siwper_img={banner3}
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default SliderSwiper;
