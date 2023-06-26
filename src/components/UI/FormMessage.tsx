type Props = {
    children: React.ReactNode
}

function FormMessage({ children }: Props) {
    return <p className="text-sm text-destructive">{children}</p>
}

export { FormMessage }
