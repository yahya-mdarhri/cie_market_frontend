import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/landing/home/home';
import TTO from '@pages/landing/tto/tto';
import Industrial from '@pages/landing/industrial/industrial';
import Incubator from '@pages/landing/incubator/Incubator';
import TechCenter from '@pages/landing/tech_center/tech_center';
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
  },
  {
    path: '/tech_center',
    element: <TechCenter />,
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
} 