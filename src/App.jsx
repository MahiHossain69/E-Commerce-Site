import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Shop from "./Pages/Shop";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element ={<Home/>}></Route>
    <Route path="/shop" element ={<Shop/>}></Route>
  </Route>
))
function App() {
 

  return (
<RouterProvider router={router}/>
  )
}

export default App
