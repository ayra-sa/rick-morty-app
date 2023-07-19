import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Container = ({children}: Props) => {
  return (
    <div className='container px-5 md:px-0 mx-auto'>{children}</div>
  )
}

export default Container