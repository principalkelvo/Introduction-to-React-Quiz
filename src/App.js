import React from "react";
import logo from "./logo.png";
import "./App.css";

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];

// comment this out after completion and uncomment code below it to proceed
// function Child() {
//   return <div>This is children content</div>;
// }

// Challenge: Uncomment this code to complete quiz

function Child({ changeValue }) {
  return (
    <>
      <div>Child</div>
      <button onClick={changeValue}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );
  function isValueChange() {
    setValue("I have been updated from my child");
  }

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child changeValue={isValueChange} />
      </div>
    </>
  );
}
// Uncomment this to tackle quiz

// Comment out after completion
// function Parent() {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//     </div>
//   );
// }
// Comment above code after completion

function App() {
  const [isBlock, setIsBlock] = React.useState(true);
  function hideElement() {
    setIsBlock((isBlock) => !isBlock);
  }
  const block = isBlock ? "block" : "none";
  const user = users.map((user) => <li key={user.id}>{user.name}</li>);
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul>{user}</ul>
      <button onClick={hideElement}>Hide Element Below</button>

      <div style={{ display: block }}>Toggle Challenge</div>
      <Parent>
        <Child />
      </Parent>
    </>
  );
}

export default App;
