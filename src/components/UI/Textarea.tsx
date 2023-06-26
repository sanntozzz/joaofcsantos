import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = React.ComponentProps<'textarea'> & {
    name: string
    errors: any
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(function Textarea({ className, errors, ...props }, ref) {
    return <textarea {...props} aria-required={errors && true} className={twMerge(className, 'h-36')} ref={ref} />
})

export { Textarea }
