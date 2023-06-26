import { Logo } from '@/components/Logo'
import { Container } from '@/components/Section/Container'
import { useEscape } from '@/hooks/useEscape'
import { useWindowSize } from '@/hooks/useWindowSize'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { List, X } from 'phosphor-react'
import { useEffect, useState } from 'react'

type navProps = {
    href: string
    text: string
}[]

const navLinks: navProps = [
    { href: '#about', text: 'About me' },
    { href: '#experience', text: 'Experience' },
    { href: '#education', text: 'Education' },
    { href: '#skills', text: 'Skills' },
    { href: '#contact', text: 'Contact me' },
]

function scrollToSection(event: any, href: string) {
    event.preventDefault()
    const Section = document.querySelector(href)
    if (Section) {
        Section.scrollIntoView({ behavior: 'smooth' })
        history.pushState(null, '', href)
    }
}

function Navigation() {
    const { width } = useWindowSize()
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (menuOpen && document) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    })

    return (
        <>
            <Container className="flex justify-between p-4">
                {width && width <= 1024 && (
                    <List
                        weight="bold"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="cursor-pointer text-2xl text-primary-400 duration-200 hover:text-primary-900"
                    />
                )}
                <Link href="/">
                    <Logo />
                </Link>
                {width && width >= 1024 && (
                    <div className="space-x-12">
                        {navLinks.map(({ href, text }, index) => {
                            return (
                                <Link key={index} onClick={(e) => scrollToSection(e, href)} href={href}>
                                    <span className="text-sm tracking-widest text-primary-400 duration-150 hover:text-primary-900">
                                        {text}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                )}
                <div />
            </Container>
            <OffsideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    )
}

type Props = {
    menuOpen: boolean
    setMenuOpen: (menuOpen: boolean) => void
}

function OffsideMenu({ menuOpen, setMenuOpen }: Props) {
    const { width } = useWindowSize()

    if (menuOpen && width && width >= 1024) {
        setMenuOpen(false)
    }

    useEscape(() => setMenuOpen(false))

    return (
        <AnimatePresence>
            {menuOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-40 bg-primary-900/80"
                        onClick={() => setMenuOpen(false)}
                    />
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-0 z-50 h-full w-full max-w-md overflow-y-auto bg-primary-900 p-4"
                    >
                        <div className="flex h-full flex-col">
                            <X
                                weight="bold"
                                className="flex-none cursor-pointer text-2xl font-bold text-primary-400 duration-200 hover:text-white"
                                onClick={() => setMenuOpen(false)}
                            />
                            <div className="flex grow items-center justify-center py-4">
                                <div className="mx-auto space-y-12">
                                    {navLinks.map(({ href, text }, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                onClick={(e) => {
                                                    scrollToSection(e, href)
                                                    setMenuOpen(false)
                                                }}
                                                href={href}
                                                className="block"
                                            >
                                                <p className="text-xl tracking-widest text-primary-400 duration-150 hover:text-white">
                                                    {text}
                                                </p>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export { Navigation }
