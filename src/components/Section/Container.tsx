import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'div'>

function Container({ ...props }: Props) {
    return (
        <div {...props} className={twMerge('mx-auto max-w-screen-xl px-4 py-12', props.className)}>
            {props.children}
        </div>
    )
}

export { Container }
