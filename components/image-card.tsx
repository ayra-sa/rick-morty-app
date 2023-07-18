import Image from 'next/image'

type Props = {
    src: string
    alt: string
    height: string
}

const ImageCard = ({src, alt, height}: Props) => {
  return (
    <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes='100vw'
        priority
        className={`w-full ${height}`}
    />
  )
}

export default ImageCard