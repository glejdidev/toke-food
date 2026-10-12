import { Routes , Route  } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products/>} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
