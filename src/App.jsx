import Navbar from "./Components/Navbar"
import {BrowserRouter as HashRouter,Routes,Route} from 'react-router-dom'
import Home from "./Components/Home"
import About from './Components/About'
import Contact from "./Components/Contact"
import Projects from "./Components/Projects"
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Components/Login"
function App() {
  return (
    <>
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />} />
<Route path='/Projects' element={<Projects />} />
      </Routes>
    </HashRouter>
      
    </>
  )
}

export default App
