import React, { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <h1 className={active ? "blackFont" : "redFont"}>Hello World</h1>
      <button onClick={handleClick}>Change color</button>
    </div>
  );
}

// Exercise for if statement using Tenary operator
// function App(props) {
//   return (
//     <div className="App">
//       {props.message.length <= 10 ? <p>{props.message}</p> : <p>Too long</p>}
//     </div>
//   );
// }

// function MyComponent() {
//   const [firstName, setFirstName] = useState("John");
//   const [message, setMessage] = useState("Hello");

//   return <div>{message}</div>;
// }

// export { MyComponent };
export default App;
