import { Container } from '@/components/Section/Container'

type listProps = {
    school: string
    course: string
    date: string
}[]

const listItems: listProps = [
    {
        school: 'Instituto Superior de Tecnologias Avançadas',
        course: 'Bachelor in Computer Science',
        date: '2020 - 2022',
    },
    {
        school: 'Instituto Superior de Tecnologias Avançadas',
        course: 'Computer Networks and Systems',
        date: '2018 - 2020',
    },
]

function Education() {
    return (
        <Container id="education" className="space-y-6">
            <div>
                <p className="tracking-[1em] text-primary-400">Learning Path</p>
                <p className="text-xl font-bold tracking-[0.5em] text-white">Education</p>
            </div>
            {listItems.map(({ school, course, date }, index) => {
                return (
                    <div key={index}>
                        <p>{school}</p>
                        <p className="text-primary-400">{course}</p>
                        <p>{date}</p>
                    </div>
                )
            })}
        </Container>
    )
}

export { Education }
