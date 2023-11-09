import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ECommerce from "../pages/Dashboard/ECommerce/ECommerce";
import Error from "../pages/Error/Error";
import Analytics from "../pages/Dashboard/Analytics/Analytics";

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
      {
        path: "/dashboard/analytics",
        element: <Analytics />
      },
    ]
  },
]);

export default router;