import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Pages/HomePage';
import ErrorPage from '../Pages/ErrorPage'
import EventsPage from "../Pages/EventsPage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/events',
          element: <EventsPage />
        }
      ]
    },
    {
      path: '/*',
      element: <ErrorPage />
    }
  ]);
  
  export default router;