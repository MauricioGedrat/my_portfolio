import React from 'react'
import AppFootter from '../components/common/Footter'
import AppNavbar from './../components/common/AppNavbar'
import Head from 'next/head'
import Mailto from '../components/contato/Mailto'
import Card from '../components/home/Card'

const Contato = () => {
    return (
        <div>
            <Head>
                <title>Simpleport - Contato</title>
            </Head>
            <AppNavbar />
            <Mailto />
            <Card />
            <AppFootter />
        </div>
    )
}

export default Contato
