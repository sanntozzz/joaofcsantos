import { VariantProps, cva } from 'cva'
import Link, { LinkProps } from 'next/link'
import { CircleNotch } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonVariants = cva(
    'flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary:
                    'border-2 border-primary-900 bg-transparent text-primary-900 hover:border-primary-900 hover:bg-primary-900 hover:text-white',
                secondary: 'bg-primary-800 text-white hover:bg-primary-700',
                subtle: 'bg-primary-700 text-white hover:bg-primary-800',
            },
            fullWidth: {
                true: 'w-full',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    }
)

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    isLoading?: boolean
    children: React.ReactNode
}

type ButtonAsAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
    LinkProps & {
        href: string
    }

type ButtonAsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
}

type ButtonProps = ButtonBaseProps & (ButtonAsAnchorProps | ButtonAsButtonProps)

function Button({ children, isLoading, leftIcon, rightIcon, className, variant, fullWidth, ...props }: ButtonProps) {
    const classNames = twMerge(buttonVariants({ variant, fullWidth, className: className }))

    if ('href' in props && props.href !== undefined) {
        return (
            <Link {...props} className={classNames}>
                {leftIcon}
                {children}
                {rightIcon}
            </Link>
        )
    }

    return (
        <button {...props} className={classNames} disabled={props.disabled || isLoading}>
            {isLoading ? <CircleNotch className="animate-spin" size={22} /> : leftIcon}
            {children}
            {rightIcon}
        </button>
    )
}

export { Button, buttonVariants }
