import { Container } from '@/components/Section/Container'
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

function Skills() {
    return (
        <Container id="skills" className="space-y-12">
            <div>
                <p className="tracking-1 text-primary-400">Technologies and Frameworks</p>
                <p className="text-xl font-bold tracking-0.5 text-white">Skills</p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-primary-400 md:grid-cols-3 lg:grid-cols-4">
                {skillsData.map(({ icon, text }, i) => {
                    const Icon = icon
                    return (
                        <div key={i} className="space-y-4">
                            <Icon size={36} className="mx-auto" />
                            <p className="text-center text-sm">{text}</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export { Skills }
