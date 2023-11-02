import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ECommerce from "../pages/Dashboard/ECommerce/ECommerce";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error /> ,
    children: [
      {
        path: "/",
        element: <ECommerce />
      },
      {
        path: "/dashboard/ecommerce",
        element: <ECommerce />
      },
    ]
  },
]);

export default router;