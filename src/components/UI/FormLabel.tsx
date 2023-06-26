import { ComponentProps } from 'react'

type Props = ComponentProps<'label'> & {
    required?: boolean
}

function FormLabel({ children, required, ...props }: Props) {
    return (
        <label {...props} className="text-sm font-bold">
            {children}
            {required && <span className="text-destructive"> *</span>}
        </label>
    )
}

export { FormLabel }
