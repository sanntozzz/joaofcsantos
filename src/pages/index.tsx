import { Contact } from '@/components/Section/Contact'
import { Education } from '@/components/Section/Education'
import { Experience } from '@/components/Section/Experience'
import { Footer } from '@/components/Section/Footer'
import { Header } from '@/components/Section/Header'
import { Navigation } from '@/components/Section/Navigation'
import { Skills } from '@/components/Section/Skills'
import { Divider } from '@/components/UI/Divider'
import { ScrollToTop } from '@/components/UI/ScrollToTop'

export default function Home() {
    return (
        <>
            <ScrollToTop />
            <Navigation />
            <Header />
            <Divider />
            <div className="bg-primary-900 text-white">
                <Experience />
                <Education />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </>
    )
}
