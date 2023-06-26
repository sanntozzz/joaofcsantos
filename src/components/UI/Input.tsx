import React from 'react'

type Props = React.ComponentProps<'input'> & {
    name: string
    errors: any
}

const Input = React.forwardRef<HTMLInputElement, Props>(function Input({ errors, type = 'text', ...props }, ref) {
    return <input {...props} type={type} aria-required={errors && true} ref={ref} />
})

export { Input }
