import { z } from 'zod'

const ContactFormValidator = z
    .object({
        firstName: z
            .string()
            .nonempty('This field is required')
            .min(3, { message: 'First name must be 3 or more characters long' }),
        lastName: z
            .string()
            .nonempty('This field is required')
            .min(3, { message: 'Last name must be 3 or more characters long' }),
        email: z.string().nonempty('This field is required').email({ message: 'Invalid email address' }),
        subject: z.string().nonempty('This field is required').min(5, { message: 'Must be 5 or more characters long' }),
        message: z
            .string()
            .nonempty('This field is required')
            .min(10, { message: 'Must be 10 or more characters long' }),
        createdOn: z.date().default(() => new Date()),
    })
    .required()

type ContactFormData = z.infer<typeof ContactFormValidator>

export { ContactFormValidator }
export type { ContactFormData }
