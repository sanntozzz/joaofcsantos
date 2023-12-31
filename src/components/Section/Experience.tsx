import { Container } from '@/components/Section/Container'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/UI/Accordion'

type listProps = {
    job: string
    location: string
    date: string
    content: string[]
}

const listItems: listProps[] = [
    {
        job: 'Curricular Internship',
        location: 'Direção-Geral dos Estabelecimentos Escolares',
        date: 'March 2020 - August 2020',
        content: ['Development of a school information management system;', 'Helpdesk.'],
    },
    {
        job: 'Curricular Internship',
        location: 'Direção-Geral dos Estabelecimentos Escolares',
        date: 'February 2018 - July 2018',
        content: ['Development of a messaging application;', 'Office 365 Administration;', 'Helpdesk.'],
    },
]

function Experience() {
    return (
        <Container id="experience" className="space-y-6">
            <div>
                <p className="tracking-[1em] text-primary-400">Career Path</p>
                <p className="text-xl font-bold tracking-[0.5em] text-white">Work Experience</p>
            </div>
            <Accordion>
                {listItems.map(({ job, location, date, content }, index) => {
                    return (
                        <AccordionItem key={index} value={index.toString()}>
                            <AccordionTrigger value={index.toString()}>
                                <p className="font-bold">{job}</p>
                                <p>{location}</p>
                                <p className="text-sm text-primary-400">{date}</p>
                            </AccordionTrigger>
                            <AccordionContent value={index.toString()}>
                                <ul className="list-inside list-disc">
                                    {content.map((item, index) => {
                                        return (
                                            <li key={index} className="text-sm">
                                                {item}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </Container>
    )
}

export { Experience }
