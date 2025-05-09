
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout'
import "bootstrap/dist/css/bootstrap.min.css"
import Error from './component/Error'
import Home from './component/Home'
import ContactUs from './component/ContactUs'
import About from './component/About'

function App() {
  const path = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      error: <Error />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'ContactUs',
          element: <ContactUs />
        },
        {
          path: 'AboutUs',
          element: <About />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={path} />
    </>
  )
}

export default App
