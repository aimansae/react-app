import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like2 = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
     console.log(status)
    onClick();
  };
  console.log

  if (status) return <AiFillHeart color="red" size={50} onClick={toggle} />;
  return <AiOutlineHeart size={50} onClick={toggle} />;
};

export default Like2;
