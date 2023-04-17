import styles from '../styles/Buttons.module.css'

interface PropsButton {
  children: string;
  color?:'primary' | 'secondary' | 'success';
  onClick: () => void
}
const Button = ({ children, onClick, color='primary' }: PropsButton) => {
  return (
    <button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
