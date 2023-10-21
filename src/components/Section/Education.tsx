import { Container } from '@/components/UI/Container'
import { educationData } from '@/data'

function Education() {
    return (
        <Container id="education" className="space-y-6">
            <div>
                <p className="tracking-[1em] text-primary-400">Learning Path</p>
                <p className="text-xl font-bold tracking-[0.5em] text-white">Education</p>
            </div>
            {educationData.map((props, index) => {
                return (
                    <div key={index}>
                        <p>{props.school}</p>
                        <p className="text-primary-400">{props.course}</p>
                        <p>{props.date}</p>
                    </div>
                )
            })}
        </Container>
    )
}

export { Education }
