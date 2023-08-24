import React, { useState } from "react";
import "./App.css";
import MyComponentClass from "./components/MyComponentClass";
import MyComponentFunction from "./components/MyComponentFunction";

function App() {

  const [show, setShow] = useState(true);

  const showClickHandler = () => {
    setShow((preShow) => {
      return !preShow
    })
  };

  return (
    <>
      {/* <MyComponentClass/> */}
      <div>
       {show && <MyComponentFunction />}
      </div>

      <p>
        <button type="button" onClick={showClickHandler}>
          {show ? "Hide" : "Show" }
        </button>
      </p>
    </>
  );
}

export default App;
