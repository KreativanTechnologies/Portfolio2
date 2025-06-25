import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './Home/Home'
import Contact from './ContactUs/Contact'
import About from './About/About'
import MyWork from './My Work/MyWork'
import Visions from './Visions/Visions'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/visions",
        element: <Visions />
      },
      {
        path: "/work",
        element: <MyWork />
      },
      {
        path: "/contact",
        element: <Contact />
      },
  
    
    ]
  }
])

const App = () => {
  return (
    <div className=' '>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
