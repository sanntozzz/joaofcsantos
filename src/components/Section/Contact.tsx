import { Button } from '@/components/UI/Button'
import { Container } from '@/components/UI/Container'
import { FormDescription } from '@/components/UI/FormDescription'
import { FormItem } from '@/components/UI/FormItem'
import { FormLabel } from '@/components/UI/FormLabel'
import { FormMessage } from '@/components/UI/FormMessage'
import { Input } from '@/components/UI/Input'
import { Textarea } from '@/components/UI/Textarea'
import { ContactFormData, ContactFormValidator } from '@/lib/contactFormValidator'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({ resolver: zodResolver(ContactFormValidator) })

    const onSubmit = async (values: ContactFormData) => {
        toast.remove()
        try {
            await axios.post('api/sendEmail', values)
            toast.success('Sent successfully')
            reset()
        } catch (err) {
            toast.error('Something went wrong, please try again.')
        }
    }

    return (
        <Container id="contact" className="space-y-12">
            <div>
                <p className="tracking-1 text-primary-400">Get in Touch</p>
                <p className="text-xl font-bold tracking-[0.5em] text-white">Contact me</p>
            </div>
            <form className="mx-auto flex max-w-screen-md flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 md:grid-cols-2">
                    <FormItem>
                        <FormLabel htmlFor="firstName" required>
                            First Name
                        </FormLabel>
                        <Input id="firstName" {...register('firstName')} errors={errors.firstName} />
                        <FormDescription>This is your first name.</FormDescription>
                        <FormMessage>{errors.firstName?.message}</FormMessage>
                    </FormItem>
                    <FormItem>
                        <FormLabel htmlFor="lastName" required>
                            Last Name
                        </FormLabel>
                        <Input id="lastName" {...register('lastName')} errors={errors.lastName} />
                        <FormDescription>This is your last name.</FormDescription>
                        <FormMessage>{errors.lastName?.message}</FormMessage>
                    </FormItem>
                </div>
                <FormItem>
                    <FormLabel htmlFor="email" required>
                        Email
                    </FormLabel>
                    <Input id="email" {...register('email')} errors={errors.email} />
                    <FormDescription>This is your email address.</FormDescription>
                    <FormMessage>{errors.email?.message}</FormMessage>
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="subject" required>
                        Subject
                    </FormLabel>
                    <Input id="subject" {...register('subject')} errors={errors.subject} />
                    <FormDescription>This is the subject of your message.</FormDescription>
                    <FormMessage>{errors.subject?.message}</FormMessage>
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="message" required>
                        Message
                    </FormLabel>
                    <Textarea id="message" {...register('message')} errors={errors.message} />
                    <FormDescription>Tell me about your project/idea.</FormDescription>
                    <FormMessage>{errors.message?.message}</FormMessage>
                </FormItem>
                <Button variant="subtle" isLoading={isSubmitting} className="py-3">
                    {isSubmitting ? 'Submitting' : 'Send Now'}
                </Button>
            </form>
        </Container>
    )
}

export { Contact }
