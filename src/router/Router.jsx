import { createBrowserRouter } from "react-router-dom";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";

const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardHome />,
      errorElement: "",
      children:[
        {}
      ]
    },
  ]);

export default router;