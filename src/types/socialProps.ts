import { IconProps } from 'phosphor-react'

type socialProps = {
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
    href: string
    text: string
}[]

export type { socialProps }
