import React from 'react'
import Card from './../components/home/Card'
import AppNavbar from './../components/common/AppNavbar'
import Owerview from './../components/home/SitesOwerview'
import HeroSection from '../components/home/HeroSection'
import Collapse from '../components/common/Collapse'
import AppFootter from './../components/common/Footter'

const Home = () => {
    return (
        <div>
            <AppNavbar />
            <Card />
            <Owerview />
            <HeroSection />
            <Collapse />
            <AppFootter />
        </div>
    )
}

export default Home
