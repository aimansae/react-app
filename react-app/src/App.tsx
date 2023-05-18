import { useState } from "react";
//import Alert from "./components/Alert";
//import Button from "./components/Button";
//import ListGroup from "./components/ListGroup";
//import ButtonTwo from "./components/ButtonTwo";
//import GreenAlert from "./components/GreenAlert";
//import Like from "./components/Like";
// import Thumbs from "./components/Thumbs";
// import Like2 from "./components/Like2";
// import Loading from "./components/Loading";
// import UpdateArrays from "./components/UpdateArrays";
// import UpdateObjects from "./components/UpdateObjects";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";

import ListGroup2 from "./components/ListGroup2";
import Alert2 from "./components/Alert2";
import Bottone from "./components/Bottone";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  let itemsV = ["Sevilla", "Milano", "tokyo", "london", "paris"];
  // for Navbar
  const [cartItems, setCartItems] = useState(["Product1", "product2"]);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertvisible, setAlertVisible] = useState(false);
  const [showGreenAlert, setShowGreenAlert] = useState(false);

  const handleClick = () => {
    setShowGreenAlert((prevState) => (prevState === false ? true : false));
  };

  return (
    <div>
      {/*<ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertvisible && <Alert onClose={() =>setAlertVisible(false)}>My alert</Alert>}
      <Button color='success' onClick={() => setAlertVisible(true) }>My Button</Button>
      
      
      {showGreenAlert && <GreenAlert onClose={handleClick}>Click Me</GreenAlert>}
      <ButtonTwo color="primary" onClick={handleClick}>Second Button</ButtonTwo> 
      <Like onClick={() =>console.log('clicked')} />
      <Thumbs onClick={() => console.log('clicked')} />
      <Like2 onClick={() => console.log('Heart clicked')} />
      <Loading />
      <UpdateArrays />
      <UpdateObjects />
      <NavBar cartItemsCount={cartItems.length} />
  <Cart onClear={() => setCartItems([]) } cartItems={cartItems} />
      <Message2 />
      <ListGroup2 items={items} heading="Cities" onSelectItem={handleSelectItem}  />
      <Alert2>Hello<span>World</span></Alert2>*/}
      <Bottone color='secondary' onClick={() => console.log('click')}>My Button</Bottone>
    </div>
  );
}

export default App;
