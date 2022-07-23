import React from 'react'
import Brands from '../components/Brands/Brands'
import Carousel from '../components/Carousel/Carousel'
import Categories from '../components/Categories/Categories'
import DayDeals from '../components/DayDeals/DayDeals'
import HealthArticles from '../components/HealthArticles/HealthArticles'
import LabTests from '../components/LabTests/LabTests'
import Offers from '../components/Offers/Offers'
import Reviews from '../components/Reviews/Reviews'

const Home = () => {
  return (
    <div>
        <Offers/>
        <Carousel/>
        <Categories/>
        <LabTests/>
        <Brands/>
        <DayDeals/>
        <HealthArticles/>
        <Reviews/>
    </div>
  )
}

export default Home