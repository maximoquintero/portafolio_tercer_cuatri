import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import CondicionAtmosferica from "../Pages/CondicionAtmosferica";

export const rutas = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/CondicionAtmosferica",
      element: <CondicionAtmosferica />,
    }
]);
