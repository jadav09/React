import './App.css';
import "./media.css"
import Header from './Header';
import SliderSwiper from './SliderSwiper';
import SvgBox from './SvgBox';
import Clearancebanner from './Clearancebanner';
import PetImages from './componets/PetImages';
// import SliderDetails from './SliderDetails';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <SliderSwiper/>
     <SvgBox/>
     <Clearancebanner/>
     <PetImages/>

       {/* <SliderDetails
                    swiper_discount={'Save 10 - 20 % off'} 
                    swiper_banner_text={'Best destination for'}
                    swiper_banner_span={'your pets'}
                    // siwper_img={banner1}
                    /> */}
     
     
    </div>
  );
}

export default App;
