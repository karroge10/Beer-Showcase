import { Router } from 'next/router'
import { useState } from 'react'
import Loader from '../components/Loader';
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
    
    const [loading, setLoading] = useState(false);

    Router.events.on('routeChangeStart', (url) => {
        setLoading(true);
    })

    Router.events.on('routeChangeComplete', (url) => {
        setLoading(false);
    })
    if (loading){
        return <Loader/>
    } else {
        return (
            <Component {...pageProps}/>
        )
    }

}