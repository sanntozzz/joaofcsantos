import { Email } from '@/components/Email/Email'
import { TFormSchema } from '@/components/Section/Contact'
import { render } from '@react-email/render'
import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            const { name, email, subject, message, createdOn }: TFormSchema = req.body

            const emailHtml = render(Email({ name, subject, email, message, createdOn }))

            const mailTransporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.NODEMAILER_EMAIL,
                    pass: process.env.NODEMAILER_PASS,
                },
            })

            try {
                await mailTransporter.sendMail({
                    from: '"João F. C. Santos" <jfilipesantos550@gmail.com>',
                    to: email,
                    cc: 'jfilipesantos550@gmail.com',
                    subject: 'Message from João F. C. Santos',
                    html: emailHtml,
                })
            } catch (err) {
                res.status(500).json({ message: 'Something went wrong' })
                break
            }

            res.status(200).json({ message: 'Sent successfully' })
            break
        default:
            res.status(405).json({ message: 'Method not allowed' })
            break
    }
}
