import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like2 = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);
  let count = 0

  const toggle = () => {
    setStatus(!status);
    count++
    console.log(status)
    onClick();
  };
  console.log(count)

  if (status) return <AiFillHeart color="red" size={50} onClick={toggle} />;
  return <AiOutlineHeart size={50} onClick={toggle} />;
};

export default Like2;
