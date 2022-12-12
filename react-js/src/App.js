import {useState} from "react";

function Btn({text, color, onClick}) {
  return (
    <button
      onClick={onClick}
      data-color={color}
      style={{
        display: "inline-block",
        width: 150,
        height: 55,
        marginRight: 10,
        backgroundColor: color,
        border: 0,
        borderRadius: 7,
        fontSize: 18,
        color: "#fff"
      }}
    >{text}</button>
  )
}

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => (
    setCounter(counter+1)
  )

  const [color, setColor] = useState("");
  const colorChange = (event) => (
    setColor((current) => (current = event.target.dataset.color))
  )
  return (
    <div className="App">
      <h1 
      style={{
        color: color
      }}>Total Count: {counter}</h1>
      <button onClick={onClick}>Click me</button>
      <div>
        <Btn onClick={colorChange} color="tomato" text="1" />
        <Btn onClick={colorChange} color="dodgerblue" text="2" />
      </div>
    </div>
  );
}

export default App;
