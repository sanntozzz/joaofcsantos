import Image from 'next/image'
import logoBlack from '../../public/logos/Black.svg'

function Logo() {
    return <Image src={logoBlack} alt="Logo for João F. C. Santos" className="w-12" draggable="false" priority />
}

export { Logo }
