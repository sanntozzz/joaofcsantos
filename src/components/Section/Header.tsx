import { Button } from '@/components/UI/Button'
import { Container } from '@/components/UI/Container'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FilePdf } from 'phosphor-react'
import Avatar from '../../../public/images/Avatar.png'

function Header() {
    return (
        <Container id="about">
            <div className="grid-flow-col items-center gap-12 space-y-8 lg:grid">
                <AnimatePresence>
                    <motion.div
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <p className="text-xl uppercase tracking-[1em]">My name is</p>
                        <p className="text-4xl font-bold uppercase tracking-[0.5em]">
                            João <span className="text-blue">Santos</span>
                        </p>
                        <p>
                            I am a recent graduate with a degree in Computer Science from ISTEC - Instituto Superior de
                            Tecnologias Avançadas, with experience in front-end development and having a huge passion
                            for UI/UX with the goal of making the final consumer experience as fast, beautiful and
                            perfect as possible. In addition to spending part of my time programming, I like to spend my
                            free time listening to music, watching movies/series and playing various types of games.
                            Obviously, I am also a technology nerd and like to be up-to-date with the latest news.
                        </p>
                        <Button
                            href="docs/Joao-Santos-Curriculum-Vitae.pdf"
                            target="_blank"
                            locale={false}
                            rightIcon={<FilePdf />}
                        >
                            Resume
                        </Button>
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, scale: 1.25 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={Avatar}
                            alt="Owner of João F. C. Santos"
                            className="mx-auto w-full max-w-xs md:max-w-md"
                            draggable="false"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </Container>
    )
}

export { Header }
