import SEO from '@/components/SEO'
import { Toast } from '@/components/UI/Toast'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const Font = Inter({
    subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={Font.className}>
            <SEO />
            <Toast />
            <Component {...pageProps} />
        </div>
    )
}
