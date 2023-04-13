interface PropsButton {
  children: string;
  color?:'primary' | 'secondary' | 'success';
  onClick: () => void
}
const Button = ({ children, onClick, color='primary' }: PropsButton) => {
  return (
    <button type="button" className={'btn + btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
