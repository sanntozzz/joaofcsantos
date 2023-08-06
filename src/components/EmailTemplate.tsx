import { ContactFormData } from '@/types/contactFormProps'
import { Body } from '@react-email/body'
import { Container } from '@react-email/container'
import { Head } from '@react-email/head'
import { Hr } from '@react-email/hr'
import { Html } from '@react-email/html'
import { Link } from '@react-email/link'
import { Preview } from '@react-email/preview'
import { Section } from '@react-email/section'
import { Tailwind } from '@react-email/tailwind'
import { Text } from '@react-email/text'

export function EmailTemplate({ firstName, createdOn, email, lastName, message, subject }: ContactFormData) {
    return (
        <Html>
            <Head />
            <Preview>{subject}</Preview>
            <Tailwind>
                <Body className="bg-white font-sans text-primary-900">
                    <Container className="m-auto p-4">
                        <Text>
                            Thanks for contacting me,{' '}
                            <span className="font-bold">{[firstName, lastName].join(' ')}</span>.
                        </Text>
                        <Text>This is the message you submitted:</Text>
                        <Section className="w-full rounded-lg bg-primary-500 p-4">
                            <Text>{message}</Text>
                        </Section>
                        <Text>
                            After I review your request, I will enter in contact with you on your email:{' '}
                            <Link href={'mailto:' + email}>{email}</Link>
                        </Text>

                        <Hr />
                        <Text className="text-primary-400">
                            This message was submitted on {new Date(createdOn).toLocaleString()}
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default EmailTemplate
