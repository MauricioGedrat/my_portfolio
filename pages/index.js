import React from 'react'
import Home from './Home'
import Head from 'next/head'

const index = () => {
    return (
        <div>
            <Head>
                <title>Simpleport</title>
            </Head>
            <Home />
        </div>
    )
}

export default index
