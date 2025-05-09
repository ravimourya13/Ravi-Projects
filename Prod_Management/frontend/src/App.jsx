import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import ErrorPage from './components/ErrorPage'
import EditProduct from './components/EditProduct'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/admin" replace />,
    },
    {
      path:'/admin',
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children:[
        {index:true,element:<Home/>},
        {path:'products',element:<Products/>},
        {path:'products/add',element:<AddProduct/>},
        {path:'products/edit/:id',element:<EditProduct/>}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
