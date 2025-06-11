import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/landing/home/home';
import TTO from '@pages/landing/tto/tto';
import Industrial from '@pages/landing/industrial/industrial';
import Incubator from '@pages/landing/incubator/Incubator';
import TechCenter from '@pages/landing/tech_center/tech_center';
import FAQ from '@pages/landing/faq/FAQ';
import NotFound from '@pages/NotFound/NotFound';
import AuditInnovationForm from '@pages/landing/InnovationDiagnosis/InnovationDiagnosis';
import OurTeam from '@pages/landing/our_team/our_team';
import LicensingProcess from '@pages/landing/licensing_process/licensing_process';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Home />,
    errorElement: <NotFound />,
    children: [
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
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/audit-innovation',
        element: <AuditInnovationForm />,
      },
      {
        path: '/our-team',
        element: <OurTeam />,
      },
      {
        path: 'licensing-process',
        element: <LicensingProcess />,
      }
    ]
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
} 