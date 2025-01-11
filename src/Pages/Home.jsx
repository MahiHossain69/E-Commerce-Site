import React from 'react'
import Banner from '../Components/Banner'
import ImageDown from '../Components/ImageDown'
import Newarrivals from '../Components/Newarrivals'
import BestSeller from '../Components/BestSeller'
import SpecialOffers from '../Components/SpecialOffers'
import Footer from '../Components/Footer'
import PromoBar from '../Components/PromoBar'


function Home() {
  return (
 <>
 <Banner/>
 <PromoBar/>
 <ImageDown/>
 <Newarrivals/>
 <BestSeller/>
 <SpecialOffers/>
 <Footer/>
 </>
  )
}

export default Home
