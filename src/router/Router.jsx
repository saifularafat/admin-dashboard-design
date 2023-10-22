import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ECommerce from "../pages/Dashboard/ECommerce/ECommerce";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: "",
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