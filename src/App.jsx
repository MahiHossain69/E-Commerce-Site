import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Journal from "./Pages/Journal";
import Cheakout from "./Pages/Checkout";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element ={<Home/>}></Route>
    <Route path="/shop" element ={<Shop/>}></Route>
    <Route path="/shop/:id" element={<ProductDetails/>}></Route>
    <Route path="/about/" element={<About/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/journal" element={<Journal/>}></Route>
    <Route path="/checkout" element={<Cheakout/>}></Route>
  </Route>
))
function App() {
 

  return (
<RouterProvider router={router}/>
  )
}

export default App
