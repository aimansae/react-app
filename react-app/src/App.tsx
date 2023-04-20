import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ButtonTwo from "./components/ButtonTwo";
import GreenAlert from "./components/GreenAlert";
import Like from "./components/Like";
import Thumbs from "./components/Thumbs";
import Like2 from "./components/Like2";
import Loading from "./components/Loading";
import UpdateArrays from "./components/UpdateArrays";
import UpdateObjects from "./components/UpdateObjects";
function App() {
  let items = ["Sevilla", "Milano", "tokyo", "london", "paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertvisible, setAlertVisible] = useState(false)
   const [showGreenAlert, setShowGreenAlert] = useState(false)

   const handleClick = () => {
    setShowGreenAlert(prevState => (prevState === false? true : false))
   }
  return (
    <div>
      <ListGroup
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
    </div>
  );
}

export default App;
