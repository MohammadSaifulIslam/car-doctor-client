import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/HomePage/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

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
      ]
    },
  ]);

export default router;