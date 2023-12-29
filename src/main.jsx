import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About } from './routes/about.jsx'
import { Works } from './routes/works.jsx'
import { Contact } from './routes/contact.jsx'
import { Work } from './routes/work.jsx'
import './index.css'
import { Home } from './routes/home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/works',
        element: <Works />,
        children: [
          {
            path: ':id',
            element: <Work />
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
