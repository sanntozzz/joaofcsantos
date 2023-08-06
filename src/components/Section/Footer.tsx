import { Container } from '@/components/UI/Container'
import { socialLinks } from '@/data'

function Footer() {
    return (
        <Container className="space-y-4">
            <div className="flex items-center justify-center gap-6">
                {socialLinks.map((props, index) => {
                    const Icon = props.icon
                    return (
                        <a
                            key={index}
                            href={props.href}
                            className="text-primary-400 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={props.text}
                        >
                            <Icon size={24} />
                        </a>
                    )
                })}
            </div>
            <p className="text-center text-sm text-primary-400">Designed and coded by João F.C. Santos</p>
        </Container>
    )
}
export { Footer }
