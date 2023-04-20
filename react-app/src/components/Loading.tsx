import React, { useState } from "react";

const Loading = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    
    setDrink({...drink, price:6});
    
  };
  console.log(setDrink)
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Loading;
