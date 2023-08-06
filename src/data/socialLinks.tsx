import { socialProps } from '@/types/socialProps'
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

const socialLinks: socialProps = [
    {
        icon: InstagramLogo,
        href: 'https://www.instagram.com/sanntozzz/',
        text: 'Instagram',
    },
    {
        icon: LinkedinLogo,
        href: 'https://www.linkedin.com/in/sanntozzz/',
        text: 'LinkedIn',
    },
    {
        icon: GithubLogo,
        href: 'https://github.com/sanntozzz',
        text: 'Github',
    },
]

export { socialLinks }
