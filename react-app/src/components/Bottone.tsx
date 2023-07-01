import React, { ReactNode } from 'react'
interface Props{
    children: ReactNode;
    onClick: () => void;
    color?: string;
}
const Bottone = ({children, onClick, color='primary'}: Props) => {
  return (
    <button className={'btn btn-' +color} onClick={onClick}>
      {children}
    </button>
  )
}

export default Bottone