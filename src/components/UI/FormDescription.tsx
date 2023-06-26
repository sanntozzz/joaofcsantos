type Props = {
    children: React.ReactNode
}

function FormDescription({ children }: Props) {
    return <p className="text-sm text-primary-400">{children}</p>
}
export { FormDescription }
