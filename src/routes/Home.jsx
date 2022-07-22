import React from 'react'
import Brands from '../components/Brands/Brands'
import Carousel from '../components/Carousel/Carousel'
import DayDeals from '../components/DayDeals/DayDeals'
import Footer from '../components/Footer/Footer'
import HealthArticles from '../components/HealthArticles/HealthArticles'
import LabTests from '../components/LabTests/LabTests'
import Navbar from '../components/Navbar/Navbar'
import Offers from '../components/Offers/Offers'
import Reviews from '../components/Reviews/Reviews'

const Home = () => {
  return (
    <div>
        <Offers/>
        <Carousel/>
        <LabTests/>
        <Brands/>
        <DayDeals/>
        <HealthArticles/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default Home