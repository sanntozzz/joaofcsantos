type Props = {
    children: React.ReactNode
}

function FormItem({ children }: Props) {
    return <div className="w-full space-y-2">{children}</div>
}
export { FormItem }
