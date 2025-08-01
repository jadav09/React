import ButtonCustom from './componets/ButtonCustom'
import siwper_img from './images/Clearancebanner.png'

function Clearancebanner() {
  return (
    <div>
         <div className='swiper-detail-wrap Clearancebanner'>

            <div className='container'>
                <div className='row'>
                   
                    <div className='col-md-6 swiper-content'>
                        <div>
                            <h4 className='discount-text'>Upto 40% off</h4>
                            <h1>Clearance <span>sale !!!</span> </h1>
                            <a href="">
                                 <ButtonCustom 
                                 Button_Name={"Shop Now"}
                                 />
                            </a>
                        </div>
                    </div>

                     <div className='col-md-6'>
                        <div className='swiper-img'>
                            <img src={siwper_img} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Clearancebanner