import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import ProductNew from "./Pages/ProductNew/ProductNew";

import { useSelector } from "react-redux";
function App() {
  const loginState = useSelector((state) => state.loggin.logic);

  console.log("state", loginState);

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Login />} />

        {loginState && (
          <>
            <Route path="/product" element={<Product />} />
            <Route path="/product/new" element={<ProductNew />} />
          </>
        )}
        {!loginState && <Route path="/:anything" element={<Login />} />}
      </Routes>
    </div>
  );
}

export default App;
