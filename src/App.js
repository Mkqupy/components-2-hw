import React from "react";
import Greeting from "./components/Greeting";
import Message from "./components/Message";
import Button from "./components/Button";

function App() {
    const BtnClick = () =>{
   console.log("кнопка натиснута");
    }
  return (
    <div>
      <Greeting name="Марія" />
      <Message text="Hello world" />
      <Button onClick={BtnClick} />
    </div>
  );
}

export default App;
