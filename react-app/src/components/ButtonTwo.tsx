interface PropsButtonTwo {
  children: string;
  color?:'primary';
  onClick: () => void;
}
const ButtonTwo = ({ children,onClick, color="primary" }: PropsButtonTwo) => {
  return <button className={"btn btn-" + color} onClick={onClick}>{children}</button>;
};

export default ButtonTwo;
