type experienceProps = {
    job: string
    location: string
    date: string
    content: string[]
}

const experienceData: experienceProps[] = [
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

export { experienceData }
