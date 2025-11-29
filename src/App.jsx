import { BrowserRouter, Route, Router, Routes } from "react-router"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Layout from "./components/Layout/Layout"
import ProductDetails from "./components/ProductDetails"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element ={<Home/>}/>
            <Route path="/shop" element ={<Shop/>}/>
            <Route path="/shop/:id" element ={<ProductDetails/>}/>
            <Route path="/contact" element={<Contact/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
