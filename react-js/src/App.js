import {useState} from "react";


function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => (
    setCounter(counter+1)
  )
  return (
    <div className="App">
      <h1>Total Count: {counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
