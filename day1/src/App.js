import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { add, divide, multiply, subtract } from "./store/actions";

function App() {
  const [x, setX] = useState("");

  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleChange = (e) => {
    setX(e.target.value);
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(add(1))}>INCREMENT</button>
        <button onClick={() => dispatch(subtract(1))}>DECREMENT</button>
      </div>
      <input
        type="text"
        placeholder="Enter x"
        onChange={handleChange}
        value={x}
      />
      <div>
        <button onClick={() => dispatch(add(x))}>ADD</button>
        <button onClick={() => dispatch(subtract(x))}>Subtract</button>
        <button onClick={() => dispatch(multiply(x))}>Multiply</button>
        <button onClick={() => dispatch(divide(x))}>Divide</button>
      </div>
    </div>
  );
}

export default App;
