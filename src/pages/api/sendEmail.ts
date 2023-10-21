import EmailTemplate from '@/components/EmailTemplate'
import { ContactFormData } from '@/lib/contactFormValidator'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    const { firstName, lastName, email, subject, message, createdOn }: ContactFormData = req.body

    switch (req.method) {
        case 'POST':
            try {
                await resend.sendEmail({
                    from: 'João F. C. Santos <contact@joaofcsantos.com>',
                    to: email,
                    subject: subject,
                    react: EmailTemplate({ firstName, lastName, email, createdOn, message, subject }),
                })
                return res.status(200).json({ success: 'Sent successfully' })
            } catch (err) {
                console.log(err)
                return res.status(500).json({ error: 'Something went wrong, please try again.' })
            }

        default:
            return res.status(405).json({ error: 'Method not allowed' })
    }
}

export default sendEmail
