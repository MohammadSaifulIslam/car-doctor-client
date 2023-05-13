import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'checkout/:id',
          element: <PrivateRoutes><Checkout/></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: 'cart',
          element: <PrivateRoutes><Cart/></PrivateRoutes>,
        }
      ]
    },
  ]);

export default router;