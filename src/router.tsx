import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/landing/home/home';
import TTO from '@pages/landing/tto/tto';
import Industrial from '@pages/landing/industrial/industrial';
import Incubator from '@pages/landing/incubator/Incubator';
import TechCenter from '@pages/landing/tech_center/tech_center';
import FAQ from '@pages/landing/faq/FAQ';
import NotFound from '@pages/NotFound/NotFound';
import Technologies from '@pages/landing/technologies/Technologies';
import AuditInnovationForm from '@pages/landing/InnovationDiagnosis/InnovationDiagnosis';
import OurTeam from '@pages/landing/our_team/our_team';
import LicensingProcess from '@pages/landing/licensing_process/licensing_process';
import JoinTheMailingList from '@pages/landing/JoinTheMailingList/JoinTheMailingList';
import Impact from '@pages/landing/impact/Impact';
import SubmitPatent from '@pages/landing/submit_patent/submit_patent';


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
        path: '/tech-center',
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
      },
      {
        path: '/join-our-mailing-list',
        element: <JoinTheMailingList />,
      },
      {
        path: '/submit_patent',
        element: <SubmitPatent />,
      },
      {
        path: '/impact',
        element: <Impact />,
      }
      ,
      {
        path: '/technologies',
        element: <Technologies />,
      }
    ]
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
} 