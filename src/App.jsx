import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Themes from './components/Themes/Themes'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'


function App() {

  return (

    <BrowserRouter>
    <Navbar />
    <Themes/>
    <Routes>
      <Route path='/a/' element={<Home/>} />
   <Route path='/a/about' element={<About/>} /> 
      <Route path='/a/portfolio' element={<Portfolio/>} /> 
      <Route path='/a/contact' element={<Contact/>} />
       
     
    
    </Routes>
    </BrowserRouter>

  )
}

export default App



// import './App.css'
// import Navbar from './components/Navbar';
// import Themes from './components/Themes/Themes'

// function App() {

//   return (
//     <>

//       <Navbar />
//       <Themes />

//     </>
//   )
// }

// export default App
