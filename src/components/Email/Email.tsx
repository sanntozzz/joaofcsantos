import { TFormSchema } from '@/components/Section/Contact'
import { Body } from '@react-email/body'
import { Container } from '@react-email/container'
import { Head } from '@react-email/head'
import { Hr } from '@react-email/hr'
import { Html } from '@react-email/html'
import { Link } from '@react-email/link'
import { Preview } from '@react-email/preview'
import { Tailwind } from '@react-email/tailwind'
import { Text } from '@react-email/text'

const Email = ({ name, subject, createdOn, email, message }: TFormSchema) => {
    return (
        <Html>
            <Head />
            <Preview>{subject}</Preview>
            <Tailwind>
                <Body className="bg-white font-sans text-primary-900">
                    <Container className="m-auto p-4">
                        <Text>
                            Thanks for contacting me, <span className="font-bold">{name}</span>!
                        </Text>
                        <Text>This is the message you submitted:</Text>
                        <Text className="w-full rounded-lg bg-primary-100 p-4">{message}</Text>
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

export { Email }
