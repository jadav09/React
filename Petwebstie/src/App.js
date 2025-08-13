import './App.css';
import "./media.css"
import Header from './Header';
import SliderSwiper from './SliderSwiper';
import SvgBox from './SvgBox';
import Clearancebanner from './Clearancebanner';
import PetImages from './componets/PetImages';
import Warrontybox from './Warrontybox';
import Footer from './componets/Footer';
import { createContext, useContext, useState } from 'react';
import PetClothing from "./PetProducts/PetClothing";
import PetFood from './PetProducts/PetFood';
import PetToy from './PetProducts/PetToy';
// import PetClothing from './PetProducts/PetClothing.js';
// import SliderDetails from './SliderDetails';

export const MyContext = createContext("")

function App() {


  const [petclothcart, setpetclothCart] = useState(JSON.parse(localStorage.getItem("AddtoCart")) || [])  // usepetcart item

  return (
    <div className="App">


      <MyContext.Provider value={{ petclothcart, setpetclothCart }}>

        <Header></Header>
        <SliderSwiper />
        <SvgBox />
        <Clearancebanner />
        <PetClothing />
        <PetFood />
        <PetToy />
        <PetImages />
        <Warrontybox />
        <Footer />

      </MyContext.Provider>




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
