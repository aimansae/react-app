interface PropsGreenAlert {
    children: string;
    onClose: () => void
}
const GreenAlert = ({children, onClose}: PropsGreenAlert) => {
  return (
    <div className="alert alert-info alert-dismissible ">
      {children}
      <button type="button" onClick={onClose}className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default GreenAlert
