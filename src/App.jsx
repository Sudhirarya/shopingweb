import './App.css'
import { CartProvider, useCart } from "react-use-cart";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Comp/Home/Navbar';
import Home from './Comp/Home/Home';
import Woman from './Comp/Woman/Woman'
import Mans from './Comp/Man/Mans'
import Scart from './Card/Scart';
import ShopingPag from './Card/ShopingPag';
import Homebuy from './Buyingpag/Homebuy';
import Womanbuy from './Buyingpag/Womanbuy';
import Kids from './Comp/Kids/Kid';
import Kidsbuy from './Buyingpag/Kidsbuy';
import Footer from './Comp/Home/Footer'
import Electronic from './Comp/Elect/Electronic';
import Elecbuy from './Buyingpag/Elecbuy';
import ManH from './Comp/Man/ManH';
import WomanG from './Comp/Woman/WomanG';
import Kisdh from './Comp/Kids/KisDh';
import ElectronicH from './Comp/Elect/ElectronicH';

function App() {  
 
  return (

  <CartProvider>  
    <BrowserRouter>

  <Navbar/>
 
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home/:ProductId' element={<Homebuy/>}/>
       {/* man */}
      <Route path='/man' element={<Mans/>} />
      <Route path='/manH' element={<ManH/>} />
      <Route path='/buy/:ProductId' element={<ShopingPag/>}/>
      {/*  wonam */}
      <Route path='/woman' element={<Woman/>} />
      <Route path='/womanG' element={<WomanG/>} />
      <Route path='/woman/:WomanId' element={<Womanbuy/>}/>
      {/* Kids */}
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/kisdh' element={<Kisdh/>} />
      <Route path='/Kids/:KidsId' element={<Kidsbuy/>}/>
      {/* Electronic */}
      <Route path='/electronic' element={<Electronic/>}/>
      <Route path='/electronicH' element={<ElectronicH/>} />
      <Route path='/elect/:ElectronicId' element={<Elecbuy/>}/>
       {/* Shoping CArd  */}
      <Route path='/Cart' element={<Scart/>} />
    </Routes>
    <Footer />
    </BrowserRouter>

</CartProvider>

    
    
  )
}

export default App
