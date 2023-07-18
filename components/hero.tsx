import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    heroImage: StaticImageData
}

const Hero = ({heroImage}: Props) => {
  return (
    <div className='hero min-h-[320px] pt-20'>
      <Image alt='image-hero' src={heroImage} />
    </div>
  )
}

export default Hero