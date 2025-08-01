import React from 'react'
import ButtonCustom from './componets/ButtonCustom'

function SliderDetails({siwper_img,swiper_discount,swiper_banner_text,swiper_banner_span}) {
    return (
        <div className='swiper-detail-wrap'>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-md-6'>
                        <div className='swiper-img'>
                            <img src={siwper_img} alt="" />
                        </div>

                    </div>
                    <div className='col-lg-6 col-md-6 swiper-content'>

                        <div>
                            <h4 className='discount-text'>{swiper_discount}</h4>
                            <h1>{swiper_banner_text} <span>{swiper_banner_span}</span></h1>
                            <a href="">
                                 <ButtonCustom 
                                  Button_Name={"Shop Now"}
                                 />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SliderDetails