import { IconType } from 'react-icons/lib'
import {
    SiCss3,
    SiFigma,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMicrosoftsqlserver,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'

type skillProps = { icon: IconType; text: string }[]

const skillsData: skillProps = [
    { icon: SiHtml5, text: 'HTML' },
    { icon: SiCss3, text: 'CSS' },
    { icon: SiJavascript, text: 'JavaScript' },
    { icon: SiTypescript, text: 'TypeScript' },
    { icon: SiReact, text: 'React' },
    { icon: SiNextdotjs, text: 'Next.js' },
    { icon: SiTailwindcss, text: 'Tailwind CSS' },
    { icon: SiMysql, text: 'MySQL' },
    { icon: SiMicrosoftsqlserver, text: 'SQL Server' },
    { icon: SiPostgresql, text: 'PostgreSQL' },
    { icon: SiPrisma, text: 'Prisma' },
    { icon: SiGit, text: 'Git' },
    { icon: SiGithub, text: 'GitHub' },
    { icon: SiFigma, text: 'Figma' },
]

export { skillsData }
