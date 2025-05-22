import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/landing/home/home';
import TTO from '@pages/landing/tto/tto';
import Industrial from '@pages/landing/industrial/industrial';
import Incubator from '@pages/landing/incubator/Incubator';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/tto',
    element: <TTO />,
  },
  {
    path: '/industrial',
    element: <Industrial />,
  },
  {
    path: '/incubator',
    element: <Incubator />,
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
} 