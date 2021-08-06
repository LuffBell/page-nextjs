import Image from 'next/image'

export default function Logo ({ src }) {
    return (
        <Image src={ src } width="350px" height="100px" alt="Logo Odontomedic" as="a" href="/"/>
    )
}