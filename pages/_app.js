import '../styles/globals.css'
import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // here you can add your aos options
        AOS.init({
            offset: 100,
        })
    }, [])
    return <Component {...pageProps} />
}

export default MyApp
