
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)





// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import {Home} from './pages/Home/Home.jsx'
// import {Contact} from './pages/Contact/Contact.jsx'
// import {Portfolio} from './pages/Portfolio/Portfolio.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/a/',
//     element: <App/>,
//     children:[
//       {
//         path: '/a/',
//         element: <Home/>
//       },      
//       {
//         path: '/a/portfolio',
//         element: <Portfolio/>
//       },      
//       {
//         path: '/a/contact',
//         element: <Contact/>
//       },
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <RouterProvider router={router}/>

 
//   </React.StrictMode>,
// )
