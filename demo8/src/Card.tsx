import React, { ReactNode } from 'react'

interface CardProps {
  title: string | Function,
  children: ReactNode
}
function Card (props: CardProps) {
  const {title, children} = props
  const titleEl = typeof title === 'string' ? <span>{title}</span> : title()

  return (
    <div style={{border: '1px solid red'}}> 
      <div className="title">{titleEl}</div>
      <div className="content">{children}</div>
    </div>
  )
}
export default Card