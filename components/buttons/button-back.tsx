import Image from 'next/image'
import { useRouter } from 'next/router'
import arrowBack from '../../public/arrow-back.svg'

type Props = {}

const ButtonBack = (props: Props) => {
  const router = useRouter()

  const handleBack = router.back

  return (
    <button onClick={handleBack} className='flex items-center gap-2'>
      <Image src={arrowBack} alt='arrow back icon' width={24} height={24} />
      <span className='font-bold'>GO BACK</span>
    </button>
  )
}

export default ButtonBack