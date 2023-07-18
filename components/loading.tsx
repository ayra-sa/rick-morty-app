import Image from 'next/image'
import loadImg from '../public/loading.svg'

type Props = {}

const Loading = (props: Props) => {
  return (
    <Image src={loadImg} alt='loading' className='mx-auto my-3' />
  )
}

export default Loading