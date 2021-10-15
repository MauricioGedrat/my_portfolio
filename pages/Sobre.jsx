import React from 'react'
import AppNavbar from '../components/common/AppNavbar'
import Card from '../components/home/Card'
import HeroSection from '../components/home/HeroSection'
import Certificates from '../components/sobre/Certificates'
import MyHistory from '../components/sobre/MyHistory'
import AppFootter from './../components/common/Footter'
import Head from 'next/head'

const Sobre = () => {
    return (
        <div>
            <Head>
                <title>Simpleport - Sobre</title>
            </Head>
            <AppNavbar />
            <Card />

            <HeroSection />
            <Certificates />
            <MyHistory />
            <AppFootter />
        </div>
    )
}

export default Sobre
