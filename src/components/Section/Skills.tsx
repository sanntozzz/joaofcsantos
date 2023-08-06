import { Container } from '@/components/UI/Container'
import { skillsData } from '@/data'

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
                            <div>
                                <Icon size={36} className="mx-auto" />
                            </div>
                            <p className="text-center text-sm">{text}</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export { Skills }
