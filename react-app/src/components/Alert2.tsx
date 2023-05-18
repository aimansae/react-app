import { ReactNode } from "react";
import { Alert } from "react-bootstrap"

interface Props{
    children: ReactNode;
}

const Alert2 = ({children}:Props) => {
  return (
      <div className="alert alert-primary">{children}</div>
  )
}

export default Alert2
