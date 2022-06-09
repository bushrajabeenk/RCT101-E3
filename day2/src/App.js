import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Todos from './todoApp/Todos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/todo" element={<Todos />}></Route>
        {/* <Route path="/todo/:id/edit" element={<TodoEdit />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
