import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "./component/Layout"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form from "./component/Form"
import Counter from "./component/Counter"
import Home from './component/Home'
import Error from './component/Error'
import Card from "./component/Card"
import ContactUs from "./component/ContactUs"
import Buttons from "./component/Buttons"
import DashBoard from "./component/DashBoard"
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
          path: 'form',
          element: <Form />
        },
        {
          path: 'counter',
          element: <Counter />
        },
        {
          path: 'button',
          element: <Buttons />
        },
        {
          path: 'card',
          element: <Card />
        },
        {
          path: 'contact',
          element: <ContactUs />
        },

        {
          path: "about",
          element: <About/>
        },

        {
          path: 'dashboard',
          element: <DashBoard />
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
