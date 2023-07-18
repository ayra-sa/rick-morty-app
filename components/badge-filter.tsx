import React from 'react'

type Props = {
    label: string
}

const BadgeFilter = ({label}: Props) => {
  return (
    <div className="badge badge-outline">{label}</div>
  )
}

export default BadgeFilter