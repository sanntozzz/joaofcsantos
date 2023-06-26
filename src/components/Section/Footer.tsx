import { Container } from '@/components/Section/Container'
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

type socialProps = {
    icon: React.ReactNode
    href: string
    text: string
}[]

const socialLinks: socialProps = [
    {
        icon: <InstagramLogo />,
        href: 'https://www.instagram.com/sanntozzz/',
        text: 'Instagram',
    },
    {
        icon: <LinkedinLogo />,
        href: 'https://www.linkedin.com/in/sanntozzz/',
        text: 'LinkedIn',
    },
    {
        icon: <GithubLogo />,
        href: 'https://github.com/sanntozzz',
        text: 'Github',
    },
]

function Footer() {
    return (
        <Container className="space-y-4">
            <div className="flex items-center justify-center gap-6">
                {socialLinks.map((props, index) => {
                    return (
                        <a
                            key={index}
                            href={props.href}
                            className="text-2xl text-primary-400 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={props.text}
                        >
                            {props.icon}
                        </a>
                    )
                })}
            </div>
            <p className="text-center text-sm text-primary-400">Designed and coded by João F.C. Santos</p>
        </Container>
    )
}
export { Footer }
