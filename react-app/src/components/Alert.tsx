import { ReactNode } from "react";
 
interface PropsAlert {
    children:ReactNode;
    onClose : () => void
    
}

const Alert = ({children, onClose}: PropsAlert) => {
  return <div className="alert alert-primary alert-dismissible">{children}
    <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
</div>;
};

export default Alert;
