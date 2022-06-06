import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";

function App() {
  return (
    <div className="App">
      {
        // Code here
      }
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="products"
          element={
            <RequiredAuth>
              <Products />
            </RequiredAuth>
          }
        >
          <Route
            path=":id"
            element={
              <RequiredAuth>
                <Product />
              </RequiredAuth>
            }
          />
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
