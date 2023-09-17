import ReactDOM from 'react-dom/client';
import {
   createBrowserRouter, RouterProvider,
}from "react-router-dom";

import Home from './views/home/Home'
import Contact from './views/contact/Contact';
import About from './views/about/About';

const router =createBrowserRouter([
{
   path:"/",
   element: <Home/>
},
{
   path:"/about",
   element: <About/>
},
{
   path:"/contact",
   element:<Contact/>
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <RouterProvider router={router} />
   </>)