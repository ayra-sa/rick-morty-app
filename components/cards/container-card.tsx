import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const ContainerCard = ({children}: Props) => {
  return (
    <div className="grid grid-cols-4 gap-5">
        {children}
    </div>
  )
}

export default ContainerCard